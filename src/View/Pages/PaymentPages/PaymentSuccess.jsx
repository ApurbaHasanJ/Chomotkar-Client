import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  return (
    <div className="text-4xl h-screen grid justify-center items-center font-semibold text-green-400">
      <div>
        <span>Payment Successfully. </span>
        <span>Transaction Id Is: {tranId}</span>
      </div>
    </div>
  );
};

export default PaymentSuccess;
