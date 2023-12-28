import { useContext } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { CartContext } from "../../Providers/CartProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="dashboard/my-carts" className="text-lg duration-300 text-slate-500 hover:text-rose-400 relative flex justify-center items-center gap-1">
      <FaBagShopping className="text-2xl " />
      <span className="absolute rounded-full text-sm -left-5 -top-1 px-1 py-[.5px] text-white text-center bg-rose-300">
        {totalQuantity || 0}
      </span>
    </Link>
  );
};

export default Cart;
