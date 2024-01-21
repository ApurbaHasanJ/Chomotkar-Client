import { HiHome } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBagShopping, FaUser } from "react-icons/fa6";
import { useContext, useState } from "react";
import SideSearchBar from "./Search/SideSearchBar";
import { CartContext } from "../../Providers/CartProvider";
import useAdmin from "../../Hooks/useAdmin";
import { SideCartContext } from "../../Providers/SideCartProvider";

const BottomNavbar = () => {
  const [isAdmin, adminLoading] = useAdmin();
  const [sideSearchBar, setSideSearchBar] = useState(false);

  const { sideCart, setSideCart } = useContext(SideCartContext);

  const { totalQuantity } = useContext(CartContext);

  const handleSideSearchBar = () => {
    setSideSearchBar(!sideSearchBar);
  };
  return (
    <div className="">
      <nav className="flex fixed bottom-0  w-full px-5 z-50 bg-white  shadow-2xl shadow-green-300 drop-shadow-2xl py-2 md:hidden justify-between items-center">
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
            <button
              onClick={handleSideSearchBar}
              className="font-semibold text-base uppercase whitespace-nowrap tracking-wide text-slate-600 hover:text-[#75934e] transition-colors duration-300">
              <div className="flex flex-col gap-1 items-center">
                <FaSearch className="text-xl" />
                <span className="text-xs">Search</span>
              </div>
            </button>
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
      <div
        className={`fixed bg-white h-full w-full max-w-[350px] pb-4 p-2 ${
          sideSearchBar ? "right-0" : "-right-[1700px]"
        } transform duration-700 shadow-2xl top-0 z-[10000]`}>
        <SideSearchBar handleSideSearchBar={handleSideSearchBar} />
      </div>
    </div>
  );
};

export default BottomNavbar;
