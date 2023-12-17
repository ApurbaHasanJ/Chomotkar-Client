import { useState } from "react";
import NavItems from "./Navitems";
import { RxCross2 } from "react-icons/rx";

import Search from "./Search/Search";
import UserDropdown from "./UserDropdown";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import Call from "./Call";
import LogoName from "./LogoName";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // console.log(user);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="  z-50 shadow-xl bg-white  text-slate-600 ">
      {/* top navbar for MD and Long devices */}
      <div className="md:block hidden my-container mx-10">
        <div className="flex my-container py-2  items-center justify-between">
          <div className="  hidden  md:flex">
            <Search />
          </div>
          <LogoName />
          {/* cart and profile */}
          <div className="flex items-center gap-4">
            {/* small device */}

            <div className="flex items-center md:gap-8 gap-5 justify-end">
              <Call />
              <NavLink
                to="dashboard/my-cart"
                className={({ isActive }) =>
                  isActive ? "active relative w-10" : "default relative w-10"
                }>
                <Cart />
              </NavLink>
              <UserDropdown />
            </div>
          </div>
        </div>
        <hr className="h-px my-container bg-gray-200 border-[1px] dark:bg-gray-700" />
        <div className="  hidden font-mono z-50 md:flex pt-2 pb-1 justify-center items-center">
          <ul className="flex justify-center items-center gap-4 menu-horizontal">
            <NavItems />
          </ul>
        </div>
      </div>

      {/* Top navbar for small devices */}
      <nav className="flex fixed top-0 z-50 bg-white shadow-xl my-container py-2 md:hidden justify-between items-center">
        {/* NavItems */}
        <div className=" z-40   lg:hidden block">
          <div className="dropdown" onClick={handleShowNavbar}>
            {showNavbar ? (
              <RxCross2 className="h-8 w-8 hover:text-rose-500" />
            ) : (
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 hover:text-rose-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            )}
          </div>
          {showNavbar && (
            <ul className="absolute grid justify-start items-start gap-3 left-0 z-40 top-16 font-semibold drop-shadow-2xl  p-4 rounded-br-lg bg-white text-black shadow-xl hover:shadow-2xl whitespace-nowrap">
              <NavItems />
            </ul>
          )}
        </div>
        {/* Name and logo */}
        <div className="w-full border-x-[2px] border-gray-300 grid justify-center mx-5">
          <LogoName />
        </div>
        {/* Facebook Link */}
        <Link to="/">
          <img
            className="w-9"
            src="https://i.ibb.co/txZVsTt/facebook.png"
            alt="Visit Facebook"
          />
        </Link>
      </nav>

      {/* bottom nav for small devices */}
      
    </nav>
  );
};
export default Navbar;
