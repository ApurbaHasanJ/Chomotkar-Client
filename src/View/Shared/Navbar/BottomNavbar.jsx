import { HiHome } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBagShopping, FaHeart, FaUser } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../Providers/CartProvider";
import useAdmin from "../../Hooks/useAdmin";
import { SideCartContext } from "../../Providers/SideCartProvider";
import { WishlistContext } from "../../Providers/WishlistProvider";
import { SideWishlistContext } from "../../Providers/SideWishListProvider";

const BottomNavbar = () => {
  const [isAdmin, adminLoading] = useAdmin();
  const { wishlist } = useContext(WishlistContext);
  const { sideCart, setSideCart } = useContext(SideCartContext);
  const { sideWishlist, setSideWishlist } = useContext(SideWishlistContext);

  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="">
      <nav className="flex fixed bottom-0  w-full px-5 z-[49] bg-white  shadow-2xl shadow-green-300 drop-shadow-2xl py-2 md:hidden justify-between items-center">
        <ul className="flex my-container justify-between items-center w-full gap-4 menu-horizontal">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              <div className="flex flex-col gap-1 items-center">
                <HiHome className="text-xl" />
                <span className="text-xs">HOME</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/orders-history"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              <div className="flex flex-col gap-1 items-center">
                <FaCalendarCheck className="text-xl" title="ORDERS HISTORY" />
                <span className="text-xs">ORDERS</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/${
                adminLoading
                  ? "loading..."
                  : isAdmin
                  ? "admin-home"
                  : "user-home"
              }`}
              className={({ isActive }) => (isActive ? "active" : "default")}>
              <div className="flex flex-col gap-1 items-center">
                <FaUser className="text-xl" />
                <span className="text-xs">Account</span>
              </div>
            </NavLink>
          </li>
          <li className="hidden md:block">
            <NavLink
              to="/dashboard/my-carts"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              <div className="flex flex-col gap-1 relative items-center">
                <FaBagShopping className="text-xl" />
                <span className="text-xs">Cart</span>
                <span className="absolute rounded-full text-sm -right-4 -top-1 px-1 py-[.5px] text-white text-center bg-[#426e0d]">
                  {totalQuantity || 0}
                </span>
              </div>
            </NavLink>
          </li>
          <li className="md:hidden block">
            <NavLink to="#" className="default">
              <div
                onClick={() => setSideWishlist(!sideWishlist)}
                className="flex flex-col gap-1 relative items-center">
                <FaHeart className="text-xl" />
                <span className="text-xs">Wishlist</span>
                <span className="absolute rounded-full text-sm -right-0 -top-1 px-1 py-[.5px] text-white text-center bg-[#426e0d]">
                  {wishlist?.length || 0}
                </span>
              </div>
            </NavLink>
          </li>
          <li className="md:hidden block">
            <NavLink to="#" className="default">
              <div
                onClick={() => setSideCart(!sideCart)}
                className="flex flex-col gap-1 relative items-center">
                <FaBagShopping className="text-xl" />
                <span className="text-xs">Cart</span>
                <span className="absolute rounded-full text-sm -right-4 -top-1 px-1 py-[.5px] text-white text-center bg-[#426e0d]">
                  {totalQuantity || 0}
                </span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavbar;
