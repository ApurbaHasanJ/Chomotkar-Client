import { useContext } from "react";
import { FaCalendarCheck, FaHeart, FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { WishlistContext } from "../../Providers/WishlistProvider";
import { CartContext } from "../../Providers/CartProvider";

const UserNavItems = () => {
  const { totalQuantity } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  return (
    <nav className="w-full font-g-mono mt-8 md:mt-0">
      <ul className="flex flex-col justify-center ml-3 items-start md:gap-6 gap-3 ">
        <li>
          <NavLink
            to="/dashboard/user-home"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaHome className="md:text-2xl text-lg md:mx-0 mx-auto" title="USER HOME" />
              <span className="md:text-base text-xs font-semibold block whitespace-nowrap">
                USER HOME
              </span>
            </div>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <div className="relative whitespace-nowrap">
                <FaHeart
                  className="md:text-2xl text-lg md:mx-0 mx-auto"
                  title="WISHLIST"
                />
                <span className="absolute inline-flex items-center justify-center px-1 py-[.5px] md:text-xs text-[8px] font-bold text-white text-center bg-[#426e0d] border border-white rounded-full -top-2 -end-3 ">
                  {wishlist?.length || 0}
                </span>
              </div>
              <span className="md:text-base text-xs font-semibold block whitespace-nowrap">
                WISHLIST
              </span>
            </div>
          </NavLink>
        </li>
        <li className="">
          <NavLink
            to="/dashboard/my-carts"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <div className="relative whitespace-nowrap">
                <FaBagShopping
                  className="md:text-2xl text-lg md:mx-0 mx-auto"
                  title="MY CART"
                />
                <span className="absolute inline-flex items-center justify-center px-1 py-[.5px] md:text-xs text-[8px] font-bold text-white text-center bg-[#426e0d] border border-white rounded-full -top-2 -end-3 ">
                  {totalQuantity || 0}
                </span>
              </div>
              <span className="md:text-base text-xs font-semibold block whitespace-nowrap">
                MY CART
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/orders-history"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <FaCalendarCheck
                className="md:text-2xl text-lg md:mx-0 mx-auto"
                title="ORDERS HISTORY"
              />
              <span className="md:text-base text-xs font-semibold block whitespace-nowrap">
                ORDERS HISTORY
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/feedback"
            className={({ isActive }) =>
              isActive ? "dashActive" : "dashDefault"
            }>
            <div className="flex items-center justify-start gap-4">
              <MdReviews
                className="md:text-2xl text-lg md:mx-0 mx-auto"
                title="ADD REVIEWS"
              />
              <span className="md:text-base text-xs font-semibold block whitespace-nowrap">
                ADD REVIEW
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNavItems;
