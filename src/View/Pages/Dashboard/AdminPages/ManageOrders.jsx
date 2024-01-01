import { useState } from "react";
import { MdDeleteForever, MdPendingActions } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import Loader from "../../../Shared/Loader/Loader";
import SectionTitle from "../../../Shared/SectionTitle";
import useOrders from "../../../Hooks/useOrders";
import useProducts from "../../../Hooks/useProducts";
import { FaInfoCircle, FaShippingFast } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ProductDetails from "./ProductDetails";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const ManageOrders = () => {
  const [orders, ordersLoading, refetch] = useOrders();
  const [products, productsLoading] = useProducts();
  const [modal, setModal] = useState(false);
  const [productDetails, setProductDetails] = useState();
  console.log(productDetails);

  const orderStatus = "shipping";

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

  return (
    <section className="pt-12  min-d-screen relative ">
      <div className="">
        <SectionTitle
          title={"MANAGE ALL products"}
          subtitle={"---Hurry Up!---"}
        />

        {/* table */}
        <div className="my-container my-20">
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            Total Products: {orders?.length}
          </h2>
          <div className="relative w-full shadow-md ">
            <div className="overflow-x-auto w-full rounded-lg">
              <table className="w-full  text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
                <thead className="text-xs  text-white uppercase bg-[#D1A054]  ">
                  <tr>
                    <th scope="col" className="p-8 font-semibold">
                      #
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ITEM IMAGE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ITEM NAME
                    </th>

                    <th scope="col" className="px-6 py-3">
                      PRICE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ACTION
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ordersLoading ? (
                    <tr className="">
                      <td className="">
                        <Loader />
                      </td>
                    </tr>
                  ) : (
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
                              setModal(!modal), setProductDetails(order);
                            }}
                            className="bg-[#D1A054] hover:bg-[#f15e5e] p-1 rounded-md text-white text-[32px]"
                          />
                        </td>
                        <td scope="row" className=" px-6 py-4">
                          <div>
                            {(orderStatus === "pending" && (
                              <MdPendingActions
                                // onClick={() => handleDeleteProduct(order?._id)}
                                className="bg-red-500 hover:bg-red-600  p-1 rounded-md text-white text-[32px]"
                              />
                            )) ||
                              (orderStatus === "shipping" && (
                                <FaShippingFast
                                  // onClick={() => handleDeleteProduct(order?._id)}
                                  className="bg-yellow-300 hover:bg-yellow-400  p-1 rounded-md text-white text-[32px]"
                                />
                              )) ||
                              (orderStatus === "confirmed" && (
                                <IoCheckmarkDoneCircle
                                  // onClick={() => handleDeleteProduct(order?._id)}
                                  className="bg-green-400 hover:bg-green-500  p-1 rounded-md text-white text-[32px]"
                                />
                              ))}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              {modal && (
                <div className="max-w-xl text-base bg-white overflow-y-scroll p-6 shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[500px] text-black">
                  <RxCross2
                    onClick={() => setModal(!modal)}
                    className="text-rose-500 bg-rose-100 duration-500 rounded-lg hover:shadow-2xl drop-shadow-2xl md:text-2xl text-xl ml-auto hover:bg-rose-100 p-[.5]"
                  />

                  <ProductDetails productDetails={productDetails} />
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
