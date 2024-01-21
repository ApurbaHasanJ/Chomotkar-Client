import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { trxID } = useParams();
  return (
    <div className="lg:mt-8 mt-28 grid text-center text-gray-600 justify-center items-center font-semibold">
      <Helmet>
        <title>Payment Success | Chomotkar</title>
      </Helmet>
      <div>
        <p className="text-lg  ">
          Thank you for your purchase! Your payment has been successfully
          processed.
        </p>
        <span className="text-lg font-medium">Transaction ID: {trxID}</span>
      </div>
      <img
        className="max-w-lg mx-auto"
        src="https://res.cloudinary.com/dxixdugif/image/upload/v1704218264/chomotkar-fashion/3226836_oelph8.jpg"
        alt="Success Illustration"
      />
    </div>
  );
};

export default PaymentSuccess;
