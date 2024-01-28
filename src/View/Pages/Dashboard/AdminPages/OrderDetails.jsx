import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { HiReceiptRefund } from "react-icons/hi";
import { useState } from "react";
import Loader from "../../../Shared/Loader/Loader";

const OrderDetails = ({ orderDetails, refetch, setModal }) => {
  const [loading, setLoading] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const handleRefundPayment = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to refund this payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Refund!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);

        axiosSecure
          .get(`/bkash/payment/refund/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount) {
              setLoading(false);
              setModal(false);
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Refund successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  console.log(orderDetails);
  return (
    <>
      {loading ? (
        <div className="w-96 grid grid-cols-1 justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div>
          {orderDetails?.refundTrxID &&
            orderDetails?.refundStatus &&
            orderDetails?.refundTime && (
              <>
                <div className="mt-3 ">
                  <h1 className="text-lg mb-2 text-center font-bold underline underline-offset-2">
                    Refund Details
                  </h1>
                  <div className=" capitalize">
                    <span className="font-semibold">Refund trxID: </span>
                    <span>{orderDetails?.refundTrxID || "none"}</span>
                  </div>

                  <div className=" capitalize">
                    <span className="font-semibold">Refund Status: </span>
                    <span>{orderDetails?.refundStatus || "none"}</span>
                  </div>
                  <div className=" capitalize">
                    <span className="font-semibold">Refund Date: </span>
                    <span>{orderDetails?.refundTime || "none"}</span>
                  </div>
                </div>
                <hr className="mt-2 border-b border-gray-400" />
              </>
            )}
          <div>
            <div className="mt-3">
              <h1 className="text-lg mb-2 text-center font-bold underline underline-offset-2">
                Customer Details
              </h1>
              <div className="">
                <span className="font-semibold">Status: </span>
                <span>
                  {orderDetails?.paidStatus === true ? "PAID" : "NOT PAID"}
                </span>
              </div>

              <div className=" capitalize">
                <span className="font-semibold">Order Status: </span>
                <span>{orderDetails?.orderStatus || "none"}</span>
              </div>
              <div className=" text-red-600">
                <span className="font-semibold">Transaction ID: </span>
                <span>{orderDetails?.trxID || "none"}</span>
              </div>
              <div className=" text-red-600">
                <span className="font-semibold">Payment ID: </span>
                <span>{orderDetails?.paymentID || "none"}</span>
              </div>

              <div className="">
                <span className="  font-semibold">Name: </span>
                <span>{orderDetails?.cusName}</span>
              </div>
            </div>
            <div className="">
              <span className="font-semibold">Phone: </span>
              <span>{orderDetails?.cusPhone || "None"}</span>
            </div>
            <div className="">
              <span className="font-semibold">Receiver Phone: </span>
              <span>{orderDetails?.cusReceiverPhone || "None"}</span>
            </div>
            <div className="">
              <span className="font-semibold">Email: </span>
              <span>{orderDetails?.cusEmail || "None"}</span>
            </div>

            <div className="">
              <span className="font-semibold">Address: </span>
              <span>{orderDetails?.cusAdd || "None"}</span>
            </div>
            <div className="">
              <span className="font-semibold">Location: </span>
              <span>{orderDetails?.cusLocation || "None"}</span>
            </div>
            <div className="">
              <span className="font-semibold">Order Date: </span>
              <span>{orderDetails?.createdAt || "None"}</span>
            </div>
            <div className="">
              <span className="font-semibold">Payment Date: </span>
              <span>{orderDetails?.paymentDate || "None"}</span>
            </div>
            <div className="">
              <span className="font-semibold">Order Note: </span>
              <span>{orderDetails?.orderNote || "None"}</span>
            </div>
            <div className="">
              <span className="font-semibold">Payment Method: </span>
              <span>{orderDetails?.paymentMethod || "None"}</span>
            </div>
          </div>
          <hr className="mt-2 border-b border-gray-400" />
          <div className="mt-3">
            <h1 className="text-lg mb-2 text-center font-bold underline underline-offset-2">
              Product Details
            </h1>
            <div className="">
              <span className="font-semibold">Name: </span>
              <span>{orderDetails?.product?.title || "None"}</span>
            </div>
            <div className="capitalize">
              <span className="font-semibold">Category: </span>
              <span>{orderDetails?.product?.category || "None"}</span>
            </div>
            <div className="capitalize">
              <span className="font-semibold">Sub Category: </span>
              <span>{orderDetails?.product?.subCategory || "None"}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Color: </span>
              <span
                style={{
                  backgroundColor: orderDetails?.color,
                }}
                className="p-2 rounded-full border"></span>
              <span className="capitalize">{orderDetails?.color}</span>
            </div>
            <div className="capitalize">
              <span className="font-semibold">Size: </span>
              <span>{orderDetails?.size || "None"}</span>
            </div>
            <div className="">
              <span className="font-semibold">Coupon: </span>
              <span>{orderDetails?.couponCode || "None"}</span>
            </div>
            <div className="capitalize">
              <span className="font-semibold">Quantity: </span>
              <span>{orderDetails?.quantity || "None"}</span>
            </div>
            <div className="font-bold text-red-500">
              <span className="font-bold">Price: </span>
              <span>BDT. {orderDetails?.totalAmount || "None"}</span>
            </div>

            {orderDetails && orderDetails.paidStatus === true && (
              <div className="grid justify-end">
                <button
                  type="button"
                  onClick={() => {
                    handleRefundPayment(orderDetails?._id);
                  }}
                  className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center gap-3 text-white bg-red-600  rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <span>Refund</span>
                  <HiReceiptRefund />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
