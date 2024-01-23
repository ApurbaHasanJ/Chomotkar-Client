import { HiReceiptRefund } from "react-icons/hi";
import useOrdersHistory from "../../../Hooks/useOrdersHistory";
import { GiSkullCrossedBones } from "react-icons/gi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import Loader from "../../../Shared/Loader/Loader";

const PhoneOrdersHistory = () => {
  const { orderedProducts, ordersLoading } = useOrdersHistory();

  const newOrdersFirst = orderedProducts.slice().reverse();
  return (
    <section className="flex flex-col text-sm gap-4 p-2">
      {ordersLoading ? (
        <div className="h-96 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        newOrdersFirst.map((order) => (
          <div
            key={order?.date}
            className="bg-gray-100 shadow hover:shadow-md rounded-md border-b p-3  ">
            <div className="flex items-center gap-2  border-none ">
              <img
                className="w-20 border rounded-md"
                src={order?.product?.photos[0].img}
                alt=""
              />
              <div className="flex flex-wrap items-center gap-3 justify-between">
                <div className="border-r-2 pr-3 border-[#75934e]">
                  <div>
                    <span>Invoice: {order?.userOrder?.INV}</span>
                  </div>

                  <div className="flex gap-2">
                    <span>Size:</span>
                    {order?.size ? (
                      <span className="uppercase">
                        {order?.userOrder?.size}
                      </span>
                    ) : (
                      "none"
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span>Color: </span>
                    {order?.userOrder?.color ? (
                      <>
                        <span
                          style={{
                            backgroundColor: order?.userOrder?.color,
                          }}
                          className="w-3 h-3 rounded-full border-2 border-slate-400"></span>
                        <span className="capitalize">
                          {order?.userOrder?.color}
                        </span>
                      </>
                    ) : (
                      "none"
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 items-center ">
                  <span>Discount: {order?.discount}%</span>
                  <span>Quantity: {order?.quantity}</span>
                  <span>Price: BDT. {order?.price}</span>
                </div>
              </div>
            </div>
            <div className="mt-2">
              {/* product name */}
              <div className="flex flex-row lg:flex-col lg:gap-0 gap-1">
                <span>Name:</span>
                <span>{order?.product?.title}</span>
              </div>
              {/* Transaction ID */}
              <div className="flex flex-row lg:flex-col lg:gap-0 gap-1">
                <span>Transaction ID:</span>
                <span>{order?.userOrder?.trxID || "None"}</span>
              </div>
              {/* Payment Method */}
              <div className="flex flex-row lg:flex-col lg:gap-0 gap-1">
                <span>Payment Method:</span>
                <span>
                  {order?.userOrder?.paymentMethod && "Cash On Delivery"}
                </span>
              </div>
              {/* date */}
              <div className="flex flex-row lg:flex-col lg:gap-0 gap-1">
                <span>Date:</span>
                <span>{order?.userOrder?.createdAt}</span>
              </div>
            </div>

            <div className="mt-2 text-center  flex flex-col justify-end">
              <div className=" w-fit mx-auto">
                {(order?.userOrder?.orderStatus === "pending" && (
                  <div className="flex flex-col items-center justify-center">
                    <MdPendingActions
                      title="PENDING"
                      className="bg-slate-400 text-2xl  hover:bg-slate-500  p-1 rounded-md text-white"
                    />
                    <span className="capitalize">
                      {order?.userOrder?.orderStatus}
                    </span>
                  </div>
                )) ||
                  (order?.userOrder?.orderStatus === "shipping" && (
                    <div className="flex flex-col items-center justify-center">
                      <FaShippingFast
                        title="SHIPPING"
                        className="bg-yellow-300 hover:bg-yellow-400 text-2xl p-1 rounded-md text-white"
                      />
                      <span className="capitalize">
                        {order?.userOrder?.orderStatus}
                      </span>
                    </div>
                  )) ||
                  (order?.userOrder?.orderStatus === "confirmed" && (
                    <div className="flex flex-col items-center justify-center">
                      <IoCheckmarkDoneCircle
                        title="CONFIRMED"
                        className="bg-[#75934e] hover:bg-green-500 text-2xl p-1 rounded-md text-white"
                      />
                      <span className="capitalize">
                        {order?.userOrder?.orderStatus}
                      </span>
                    </div>
                  )) ||
                  (order?.userOrder?.orderStatus === "rejected" && (
                    <div className="flex flex-col items-center justify-center">
                      <GiSkullCrossedBones
                        title="REJECTED"
                        className="bg-red-600 hover:bg-red-700 text-2xl p-1 rounded-md text-white"
                      />
                      <span className="capitalize">
                        {order?.userOrder?.orderStatus}
                      </span>
                    </div>
                  )) ||
                  (order?.userOrder?.orderStatus === "refund" && (
                    <div className="flex flex-col items-center justify-center">
                      <HiReceiptRefund
                        title="REFUND"
                        className="bg-red-600 hover:bg-red-700 text-2xl p-1 rounded-md text-white"
                      />
                      <span className="capitalize">
                        {order?.userOrder?.orderStatus}
                      </span>
                    </div>
                  ))}
              </div>
              <div className="border-t border-[#75934e] pt-1">ORDER STATUS</div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default PhoneOrdersHistory;
