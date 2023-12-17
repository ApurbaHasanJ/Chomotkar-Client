import { FaBagShopping } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Cart = () => {
  return (
    <div className="text-lg duration-300 text-slate-500 hover:text-rose-400 relative flex justify-center items-center gap-1">
      <FaBagShopping className="text-2xl " />
      <span className="absolute rounded-full text-sm -left-2 bottom-0 text-white h-5 w-5 text-center bg-rose-300">0</span>
    </div>
  );
};

export default Cart;
