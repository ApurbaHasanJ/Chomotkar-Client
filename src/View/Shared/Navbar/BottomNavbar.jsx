import { HiHome } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBagShopping, FaUser } from "react-icons/fa6";

const BottomNavbar = () => {
  return (
    <nav className="flex fixed w-full  bottom-0 z-50 bg-white  my-container py-2 md:hidden justify-between items-center">
      <ul className="flex px-10 justify-between items-center w-full gap-4 menu-horizontal">
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
            to="/search"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <div className="flex flex-col gap-1 items-center">
              <FaSearch className="text-xl" />
              <span className="text-xs">Search</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <div className="flex flex-col gap-1 items-center">
              <FaUser className="text-xl" />
              <span className="text-xs">Account</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <div className="flex flex-col gap-1 relative items-center">
              <FaBagShopping className="text-xl" />
              <span className="text-xs">Cart</span>
              <span className="absolute rounded-full text-sm -right-2 top-0 text-white h-5 w-5 text-center bg-rose-300">
                0
              </span>
              
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
