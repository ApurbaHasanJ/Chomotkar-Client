import { useParams } from "react-router-dom";


const PaymentError = () => {
    const { tranId } = useParams();
    return (
      <div className="text-4xl h-screen grid justify-center items-center font-semibold text-red-600">
        <div>
          <span>Payment Failed. </span>
          <span>Transaction Id Is: {tranId}</span>
        </div>
      </div>
    );
};

export default PaymentError;