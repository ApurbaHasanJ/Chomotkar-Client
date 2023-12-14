import { HiOutlineShoppingBag } from "react-icons/hi2";

const Cart = () => {
  return (
    <div className="text-lg flex justify-center items-center gap-1">
      <HiOutlineShoppingBag className="text-2xl hover:text-rose-500" />
      <p>(0)</p>
    </div>
  );
};

export default Cart;
