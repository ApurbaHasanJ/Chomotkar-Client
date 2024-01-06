import { useContext } from "react";
import { FaCalendarCheck, FaHeart, FaHome, FaWallet } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../../Providers/WishlistProvider";
import { CartContext } from "../../Providers/CartProvider";
//   import useCart from "../../../hooks/useCart";

const UserNavItems = () => {
  const { totalQuantity } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  return (
    <nav className="w-full font-g-mono">
      <ul className="flex flex-col justify-start items-start md:gap-6 gap-3 ">
        <li>
          <NavLink
            to="/dashboard/user-home"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaHome className="w-14 h-6 md:mx-0 mx-auto" title="USER HOME" />
            <span className="text-base font-semibold block whitespace-nowrap">
              USER HOME
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <div className="relative whitespace-nowrap">
              <FaHeart className="w-14 h-6 md:mx-0 mx-auto" title="WISHLIST" />
              <span className="absolute inline-flex items-center justify-center px-1 py-[.5px] text-xs font-bold text-white bg-red-600 border border-white rounded-full -top-2 -end-1 ">
                {wishlist?.length || 0}
              </span>
            </div>
            <span className="text-base font-semibold block whitespace-nowrap">
              WISHLIST
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-carts"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <div className="relative whitespace-nowrap">
              <FaBagShopping
                className="w-14 h-6 md:mx-0 mx-auto"
                title="MY CART"
              />
              <span className="absolute inline-flex items-center justify-center px-1 py-[.5px] text-xs font-bold text-white bg-red-600 border border-white rounded-full -top-2 -end-1 ">
                {totalQuantity || 0}
              </span>
            </div>
            <span className="text-base font-semibold block whitespace-nowrap">
              MY CART
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/payment-history"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaWallet
              className="w-14 h-6 md:mx-0 mx-auto"
              title="PAYMENT HISTORY"
            />
            <span className="text-base font-semibold block whitespace-nowrap">
              PAYMENT HISTORY
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/orders-history"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaCalendarCheck
              className="w-14 h-6 md:mx-0 mx-auto"
              title="PENDING ORDERS"
            />
            <span className="text-base font-semibold block whitespace-nowrap">
              PENDING ORDERS
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-review"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <MdReviews
              className="w-14 h-6 md:mx-0 mx-auto"
              title="ADD REVIEWS"
            />
            <span className="text-base font-semibold block whitespace-nowrap">
              ADD REVIEWS
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavItems;
