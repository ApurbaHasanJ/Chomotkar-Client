import { Helmet } from "react-helmet-async";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PaymentError = () => {
  const searchData = new URLSearchParams(window.location.search);
  const message = searchData.get("message");
  return (
    <>
      <Helmet>
        <title>Payment Error | Chomotkar</title>
      </Helmet>
      <div className="my-container">
        <Link to="/dashboard/orders-history">
          <button className="bg-[#75934e] mt-6 opacity-70 hover:opacity-80 flex items-center gap-1 px-3 ml-auto py-1">
            <span>Orders History</span> <FaArrowRightLong />
          </button>
        </Link>
        <div className="min-h-screen -mt-28 text-center text-gray-600 flex flex-col justify-center items-center font-semibold">
          <img
            className="max-w-xs  w-full mx-auto"
            src="https://res.cloudinary.com/dxixdugif/image/upload/v1704218306/chomotkar-fashion/20943865_gu7qff.jpg"
            alt="Failed Illustration"
          />
          {/* <div className="md:max-w-[120px] max-w-[80px] w-full mx-auto">
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </div> */}
          <div className="md:text-lg text-xs ">
            <p>
              We&apos;re sorry, but there was an issue processing your payment.
              Please check your payment details and try again.
            </p>
            <span className="font-medium">Payment Error: {message}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentError;
