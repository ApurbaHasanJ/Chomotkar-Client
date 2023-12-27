import { useContext } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { CartContext } from "../../Providers/CartProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="dashboard/my-carts" className="text-lg duration-300 text-slate-500 hover:text-rose-400 relative flex justify-center items-center gap-1">
      <FaBagShopping className="text-2xl " />
      <span className="absolute rounded-full text-sm -left-2 bottom-0 text-white h-5 w-5 text-center bg-rose-300">
        {totalQuantity || 0}
      </span>
    </Link>
  );
};

export default Cart;
