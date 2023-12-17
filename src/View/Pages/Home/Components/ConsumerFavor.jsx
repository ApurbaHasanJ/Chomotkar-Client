import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { FaHeadset } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";


const ConsumerFavor = () => {
  return (
    <section className="my-container mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="text-mono border p-5 border-gray-300 text-gray-300 duration-500 hover:text-rose-300 hover:border-rose-300 flex flex-col items-center text-center justify-center">
        <TbTruckDelivery className="text-5xl" />
        <span className="mt-3">Fastest Shipping Countywide</span>
      </div>
      <div className="text-mono border p-5 border-gray-300 text-gray-300 duration-500 hover:text-rose-300 hover:border-rose-300 flex flex-col items-center text-center justify-center">
        <GiReturnArrow className="text-4xl" />
        <span className="mt-3">Easy Return Policy</span>
      </div>
      <div className="text-mono border p-5 border-gray-300 text-gray-300 duration-500 hover:text-rose-300 hover:border-rose-300 flex flex-col items-center text-center justify-center">
        <FaHeadset className="text-4xl" />
        <span className="mt-3">Online Support 24/7</span>
      </div>
      <div className="text-mono border p-5 border-gray-300 text-gray-300 duration-500 hover:text-rose-300 hover:border-rose-300 flex flex-col items-center text-center justify-center">
        <MdOutlineDesignServices className="text-5xl" />
        <span className="mt-3">Weakly New Design</span>
      </div>
    </section>
  );
};

export default ConsumerFavor;
