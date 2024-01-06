import { MdPendingActions } from "react-icons/md";
import SectionTitle from "../../../Shared/SectionTitle";
import { useContext } from "react";
import { OrdersHistoryContext } from "../../../Providers/OrdersHistoryProvider";
import useProducts from "../../../Hooks/useProducts";
import Loader from "../../../Shared/Loader/Loader";
import { FaShippingFast } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { GiSkullCrossedBones } from "react-icons/gi";
import Swal from "sweetalert2";

const OrdersHistory = () => {
  const { ordersHistory, handleDeleteOrder } = useContext(OrdersHistoryContext);
  console.log(ordersHistory);
  const [products, productsLoading] = useProducts();

  const orderStatus = "pending";

  const orderedProducts = ordersHistory
    .map((order) => {
      const matchingProduct = products.find(
        (product) => product?._id === order.productId
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

  const handleRejectOrder = (date) => {
    const encodedDate = encodeURIComponent(date);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to reject this order!?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Reject!",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`http://localhost:5000/orders/user/reject/${encodedDate}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              handleDeleteOrder(date);
            }
          })

          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <section className="pt-12  min-h-screen relative ">
      <div className="">
        <SectionTitle
          title={"Orders History"}
          subtitle={"---Order More?!---"}
        />

        {/* table */}
        <div className="my-container my-20">
          <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
            Total Orders: {orderedProducts?.length}
          </h2>
          <div className="relative w-full shadow-md ">
            <div className="overflow-x-auto w-full rounded-lg">
              {productsLoading ? (
                <div className="min-h-screen">
                  <Loader />
                </div>
              ) : (
                <>
                  {orderedProducts.length > 0 ? (
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
                            DETAILS
                          </th>
                          <th scope="col" className="px-6 py-3">
                            DISCOUNT
                          </th>
                          <th scope="col" className="px-6 py-3">
                            PRICE
                          </th>

                          <th scope="col" className="px-6 py-3">
                            STATUS
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
                              key={order?.date}
                              className="bg-white border-b py-10 hover:bg-gray-50 ">
                              <td className="w-4 p-8 font-semibold">
                                {index + 1}
                              </td>
                              <th
                                scope="row"
                                className="pl-6 pr-2 py-4 grid items-center font-medium text-gray-900 whitespace-nowrap ">
                                <img
                                  className="md:w-20 md:h-full object-cover w-16"
                                  src={order?.product?.photos[0]?.img}
                                  alt={order?.product?.title}
                                  title={order?.title}
                                />
                                <span className="font-medium text-gray-900 whitespace-nowrap ">
                                  {order?.product?.title}
                                </span>
                                <span className="font-medium text-gray-900 whitespace-nowrap ">
                                  {order?.date}
                                </span>
                              </th>
                              <td
                                scope="row"
                                className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap ">
                                <div className="grid items-center">
                                  <div className="flex gap-1 text-xs text-gray-400 items-center">
                                    <span
                                      style={{ backgroundColor: order?.color }}
                                      className="w-4 h-4 rounded-full border-2 border-slate-400"></span>
                                    <span className="capitalize">
                                      {order?.color}
                                    </span>
                                  </div>
                                  <span>Size: {order?.size}</span>
                                  <span></span>
                                </div>
                              </td>
                              <td scope="row" className="px-6 py-4 font-bold">
                                {order?.discount}%
                              </td>

                              <td scope="row" className="px-6 py-4 font-bold">
                                <div className="grid items-center">
                                  <span>Quantity: {order?.quantity}</span>
                                  <span>BDT. {order?.price}</span>
                                </div>
                              </td>

                              <td scope="row" className=" px-6 py-4">
                                <div>
                                  {(orderStatus === "pending" && (
                                    <MdPendingActions
                                      // onClick={() => handleDeleteProduct(order?._id)}
                                      className="bg-slate-400 hover:bg-slate-500  p-1 rounded-md text-white text-[32px]"
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
                                    )) ||
                                    (orderStatus === "rejected" && (
                                      <GiSkullCrossedBones
                                        // onClick={() => handleDeleteProduct(order?._id)}
                                        className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                                      />
                                    ))}
                                </div>
                              </td>
                              <td scope="row" className="px-6 py-4 font-bold">
                                <GiSkullCrossedBones
                                  onClick={() => handleRejectOrder(order?.date)}
                                  className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                                />
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center md:text-xl text-base shadow-xl bg-rose-100 py-5 mt-28">
                      <p>
                        No order history available. Please please order
                        something.
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersHistory;
