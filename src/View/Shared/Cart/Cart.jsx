import { useContext } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { CartContext } from "../../Providers/CartProvider";
import { Link } from "react-router-dom";
import { SideCartContext } from "../../Providers/SideCartProvider";
const Cart = () => {
  const { totalQuantity } = useContext(CartContext);

  const { sideCart, setSideCart } = useContext(SideCartContext);

  return (
    <>
      <div>
        <button
          onClick={() => setSideCart(!sideCart)}
          className="text-lg duration-300 text-white hover:text-gray-300 relative md:hidden flex justify-center items-center gap-1">
          <FaBagShopping className="text-2xl " />
          <span className="absolute rounded-full text-sm -left-5 -top-1 px-1 py-[.5px] text-white text-center bg-[#426e0d]">
            {totalQuantity || 0}
          </span>
        </button>
        <Link
          to="dashboard/my-carts"
          className="text-lg md:flex hidden duration-300 text-white hover:text-gray-300 relative justify-center items-center gap-1">
          <FaBagShopping className="text-2xl " />
          <span className="absolute rounded-full text-sm -left-5 -top-1 px-1 py-[.5px] text-white text-center bg-[#426e0d]">
            {totalQuantity || 0}
          </span>
        </Link>
      </div>
    </>
  );
};

export default Cart;
