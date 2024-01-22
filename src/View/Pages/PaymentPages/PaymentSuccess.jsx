import { Helmet } from "react-helmet-async";
import { FaArrowRightLong } from "react-icons/fa6";
// import Lottie from "react-lottie";
// import success from "../../../assets/success.json";
import { Link, useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { trxID } = useParams();
  // const defaultOptions = {
  //   loop: false,
  //   autoplay: true,
  //   animationData: success,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <>
      <Helmet>
        <title>Payment Success | Chomotkar</title>
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
            src="https://res.cloudinary.com/dxixdugif/image/upload/v1704218264/chomotkar-fashion/3226836_oelph8.jpg"
            alt="Success Illustration"
          />
          {/* <div className="md:max-w-[120px] max-w-[80px] w-full mx-auto">
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </div> */}
          <div className="md:text-lg text-xs ">
            <p>
              Thank you for your purchase! Your payment has been successfully
              processed.
            </p>
            <span className="font-medium">Transaction ID: {trxID}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
