import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useOrdersHistory from "../../Hooks/useOrdersHistory";
import Loader from "../../Shared/Loader/Loader";
import { useEffect } from "react";

const OrderReceived = () => {
  const { orderedProducts, ordersLoading } = useOrdersHistory();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Disable scroll restoration when navigating away from this component
    const handleScrollRestoration = () => {
      window.history.scrollRestoration = "manual";
    };

    // Add event listener for scroll restoration
    window.addEventListener("beforeunload", handleScrollRestoration);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleScrollRestoration);
    };
  }, []);

  const currentOrder = orderedProducts[orderedProducts.length - 1];

  console.log(currentOrder);
  return (
    <div className="my-container md:text-base text-sm md:mt-10 mt-6 mb-16">
      <h2 className="uppercase text-center font-semibold md:text-4xl text-2xl">
        Thank You
      </h2>
      {ordersLoading ? (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="border shadow-lg mt-8 p-5 pb-16 rounded-md">
          <h4 className="md:text-2xl text-lg font-semibold text-center">
            Your order has been received
          </h4>
          <Link to="/dashboard/orders-history">
            <button className="bg-[#75934e] mt-6 opacity-70 hover:opacity-80 flex items-center gap-1 px-3 ml-auto py-1">
              <span>Orders History</span> <FaArrowRightLong />
            </button>
          </Link>
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-2 md:justify-between mt-3 shadow-md bg-gray-100 p-3 rounded-md">
            <div className="flex items-center gap-2 border-none ">
              <img
                className="w-20 border"
                src={currentOrder?.product?.photos[0].img}
                alt=""
              />
              <div>
                <div>
                  <span>Invoice: {currentOrder?.userOrder?.INV}</span>
                </div>
                <div className="flex gap-2">
                  <span>Size:</span>
                  {currentOrder?.userOrder?.size === "" ? (
                    "none"
                  ) : (
                    <span className="uppercase">
                      {currentOrder?.userOrder?.size}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span>Color: </span>
                  {currentOrder?.userOrder?.color ? (
                    <>
                      <span
                        style={{
                          backgroundColor: currentOrder?.userOrder?.color,
                        }}
                        className="w-3 h-3 rounded-full border-2 border-slate-400"></span>
                      <span className="capitalize">
                        {currentOrder?.userOrder?.color}
                      </span>
                    </>
                  ) : (
                    "none"
                  )}
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="flex flex-row lg:flex-col lg:gap-0 gap-1">
              <span>Total:</span>
              <span className="whitespace-normal">
                BDT. {currentOrder?.userOrder?.totalAmount}.00
              </span>
            </div>
            {/* Payment Method */}
            <div className="flex flex-row lg:flex-col lg:gap-0 gap-1">
              <span>Payment Method:</span>
              <span>
                {currentOrder?.userOrder?.paymentMethod && "Cash On Delivery"}
              </span>
            </div>
            {/* date */}
            <div className="flex flex-row lg:flex-col lg:gap-0 gap-1">
              <span>Date:</span>
              <span>{currentOrder?.userOrder?.createdAt}</span>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="md:text-xl text-base font-semibold ">
              Please verify your info
            </h4>
            <h6 className="text-yellow-400 drop-shadow-2xl">
              If there is any mistake in your details, please contact: +880
              1886-084422
            </h6>

            <div className="mt-4 shadow-md bg-gray-100 p-3 rounded-md">
              <div>Order Item: {currentOrder?.product?.title}</div>
              <div>Name: {currentOrder?.userOrder?.cusName}</div>
              <div> Phone: +88{currentOrder?.userOrder?.cusPhone}</div>
              {currentOrder?.userOrder?.cusReceiverPhone && (
                <div>
                  Receiver Phone: +88{currentOrder?.userOrder?.cusReceiverPhone}
                </div>
              )}
              <div> Email: {currentOrder?.userOrder?.cusEmail || "None"}</div>
              <hr className="my-2 mx-5 border-b text-gray-800" />
              <div>Address: {currentOrder?.userOrder?.cusAdd || "None"}</div>
              <div>
                Address: {currentOrder?.userOrder?.cusLocation || "None"}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderReceived;
