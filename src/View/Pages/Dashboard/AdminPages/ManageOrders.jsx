import { useState } from "react";
import { MdPendingActions } from "react-icons/md";
import { GiSkullCrossedBones } from "react-icons/gi";
import Loader from "../../../Shared/Loader/Loader";
import SectionTitle from "../../../Shared/SectionTitle";
import useOrders from "../../../Hooks/useOrders";
import useProducts from "../../../Hooks/useProducts";
import { FaInfoCircle, FaShippingFast } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import OrderDetails from "./OrderDetails";
import { HiReceiptRefund } from "react-icons/hi";

const ManageOrders = () => {
  const [orders, ordersLoading, refetch] = useOrders();
  const [products, productsLoading] = useProducts();
  const [modal, setModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState();
  const [orderId, setOrderId] = useState(null);

  const [axiosSecure] = useAxiosSecure();
  // console.log(orderDetails);

  // finding product from products using productId
  const orderedProducts = orders
    .map((order) => {
      const matchingProduct = products.find(
        (product) => product._id === order.productId
      );
      if (matchingProduct) {
        return {
          ...order,
          product: matchingProduct,
        };
      }
      return null;
    })
    .filter(Boolean);
  console.log(orderedProducts);

  const handleOrderStatus = (id, status) => {
    // const encodedDate = encodeURIComponent(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to change order status!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Change!",
    }).then((res) => {
      if (res.isConfirmed) {
        axiosSecure
          .patch(`/orders/admin/${id}`, {
            orderStatus: status,
          })
          .then((res) => {
            console.log(res);
            if (res.data.modifiedCount) {
              refetch();
              setOrderId("");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `The order is now ${status}!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <section className="pt-12  min-d-screen relative ">
      <div className="">
        <SectionTitle
          title={"MANAGE ALL orders"}
          subtitle={"---Hurry Up!---"}
        />

        {/* table */}
        <div className="my-container my-20">
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            Total Products: {orders?.length}
          </h2>
          <div className="relative w-full shadow-md ">
            <div className="overflow-x-auto w-full rounded-lg">
              {ordersLoading && productsLoading ? (
                <div className="min-h-screen">
                  <Loader />
                </div>
              ) : (
                <table className="w-full  text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
                  <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
                    <tr>
                      <th scope="col" className="p-8 font-semibold">
                        #
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PRODUCT
                      </th>
                      <th scope="col" className="px-6 py-3">
                        USER
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PRICE
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DETAILS
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderedProducts &&
                      orderedProducts.map((order, index) => (
                        <tr
                          key={order?._id}
                          className="bg-white border-b py-10 hover:bg-gray-50 ">
                          <td className="w-4 p-8 font-semibold">{index + 1}</td>
                          <th
                            scope="row"
                            className="px-6 py-4 grid items-center font-medium text-gray-900 whitespace-nowrap ">
                            <img
                              className="md:w-20 md:h-full object-cover w-16"
                              src={order?.product?.photos[0]?.img}
                              alt={order?.product?.title}
                              title={order?.title}
                            />
                            <span
                              scope="row"
                              className="font-medium text-gray-900 whitespace-nowrap ">
                              {order?.product?.title}
                            </span>
                          </th>
                          <td
                            scope="row"
                            className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap ">
                            <div className="grid items-center">
                              <span>{order?.cusName}</span>
                              <span>{order?.cusEmail || "email: none"}</span>
                              <span>+88{order?.cusPhone}</span>
                            </div>
                          </td>

                          <td scope="row" className="px-6 py-4 font-bold">
                            BDT. {order?.totalAmount}
                          </td>
                          <td scope="row" className="px-6 py-4">
                            <FaInfoCircle
                              onClick={() => {
                                setModal(!modal), setOrderDetails(order);
                              }}
                              className="bg-[#D1A054] hover:bg-[#f15e5e] p-1 rounded-md text-white text-[32px]"
                            />
                          </td>
                          <td scope="row" className=" px-6 py-4">
                            <div className="relative">
                              <div
                                onClick={() => {
                                  setOrderId(order?._id);
                                }}>
                                {(order?.orderStatus === "pending" && (
                                  <MdPendingActions className="bg-slate-400 hover:bg-slate-500  p-1 rounded-md text-white text-[32px]" />
                                )) ||
                                  (order?.orderStatus === "shipping" && (
                                    <FaShippingFast className="bg-yellow-300 hover:bg-yellow-400  p-1 rounded-md text-white text-[32px]" />
                                  )) ||
                                  (order?.orderStatus === "confirmed" && (
                                    <IoCheckmarkDoneCircle className="bg-green-400 hover:bg-green-500  p-1 rounded-md text-white text-[32px]" />
                                  )) ||
                                  (order?.orderStatus === "rejected" && (
                                    <GiSkullCrossedBones className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]" />
                                  )) ||
                                  (order?.orderStatus === "refund" && (
                                    <HiReceiptRefund className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]" />
                                  ))}
                              </div>
                              <div className="absolute z-10 right-4 top-4 rounded-md shadow-md">
                                {orderId === order?._id && (
                                  <div className="grid relative gap-2  p-3 bg-white border">
                                    <RxCross2
                                      onClick={() => setOrderId("")}
                                      className="absolute -right-2 -top-2 text-red-600 bg-red-100 shadow-md text-xl rounded-full"
                                    />
                                    {/* pending */}
                                    <button
                                      type="button"
                                      disabled={
                                        order?.orderStatus === "pending"
                                      }
                                      onClick={() =>
                                        handleOrderStatus(order?._id, "pending")
                                      }
                                      className={`flex gap-2 hover:bg-red-50 border-b pb-2 items-center`}>
                                      <MdPendingActions className="bg-slate-400 hover:bg-slate-500  p-1 rounded-md text-white text-[32px]" />
                                      <span
                                        className={`${
                                          order?.orderStatus === "pending"
                                            ? "bg-red-200"
                                            : ""
                                        } rounded-full px-1`}>
                                        Pending
                                      </span>
                                    </button>
                                    {/* shipping */}
                                    <button
                                      type="button"
                                      disabled={
                                        order?.orderStatus === "shipping"
                                      }
                                      onClick={() =>
                                        handleOrderStatus(
                                          order?._id,
                                          "shipping"
                                        )
                                      }
                                      className={`flex gap-2 hover:bg-red-50 border-b pb-2 items-center`}>
                                      <FaShippingFast className="bg-yellow-300 hover:bg-yellow-400  p-1 rounded-md text-white text-[32px]" />
                                      <span
                                        className={`${
                                          order?.orderStatus === "shipping"
                                            ? "bg-red-200"
                                            : ""
                                        } rounded-full px-1`}>
                                        Shipping
                                      </span>
                                    </button>
                                    {/* confirmed */}
                                    <button
                                      type="button"
                                      disabled={
                                        order?.orderStatus === "confirmed"
                                      }
                                      onClick={() =>
                                        handleOrderStatus(
                                          order?._id,
                                          "confirmed"
                                        )
                                      }
                                      className={`flex gap-2 hover:bg-red-50 border-b pb-2 items-center`}>
                                      <IoCheckmarkDoneCircle className="bg-green-400 hover:bg-green-500  p-1 rounded-md text-white text-[32px]" />
                                      <span
                                        className={`${
                                          order?.orderStatus === "confirmed"
                                            ? "bg-red-200"
                                            : ""
                                        } rounded-full px-1`}>
                                        Confirmed
                                      </span>
                                    </button>
                                    {/* rejected */}
                                    <button
                                      type="button"
                                      disabled={
                                        order?.orderStatus === "rejected"
                                      }
                                      onClick={() =>
                                        handleOrderStatus(
                                          order?._id,
                                          "rejected"
                                        )
                                      }
                                      className="flex gap-2 hover:bg-red-50  items-center">
                                      <GiSkullCrossedBones className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]" />
                                      <span
                                        className={`${
                                          order?.orderStatus === "rejected"
                                            ? "bg-red-200"
                                            : ""
                                        } rounded-full px-1`}>
                                        Rejected
                                      </span>
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
              {modal && (
                <div className="max-w-2xl text-base bg-white overflow-y-scroll p-6 shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[550px] text-black">
                  <RxCross2
                    onClick={() => setModal(!modal)}
                    className="text-rose-500 bg-rose-100 duration-500 rounded-lg hover:shadow-2xl drop-shadow-2xl md:text-2xl text-xl ml-auto hover:bg-rose-100 p-[.5]"
                  />

                  <OrderDetails
                    orderDetails={orderDetails}
                    refetch={refetch}
                    setModal={setModal}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageOrders;
