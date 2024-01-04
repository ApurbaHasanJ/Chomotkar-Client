import { useParams } from "react-router-dom";

const PaymentError = () => {
  const { tranId } = useParams();

  return (
    <div className="grid lg:mt-8 mt-28 text-center text-gray-600 justify-center items-center font-semibold">
      <div>
        <p className="text-lg">
          We&apos;re sorry, but there was an issue processing your payment.
          <br />
          Please check your payment details and try again.
        </p>
        <span className="text-lg font-medium">Transaction ID: {tranId}</span>
      </div>
      <img
        className="max-w-lg mx-auto mt-4"
        src="https://res.cloudinary.com/dxixdugif/image/upload/v1704218306/chomotkar-fashion/20943865_gu7qff.jpg"
        alt="Failed Illustration"
      />
    </div>
  );
};

export default PaymentError;
