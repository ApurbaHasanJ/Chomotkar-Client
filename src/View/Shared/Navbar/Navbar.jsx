import { useState } from "react";
import NavItems from "./Navitems";
import { RxCross2 } from "react-icons/rx";

import Search from "./Search/Search";
import UserDropdown from "./UserDropdown";
import { NavLink } from "react-router-dom";
import Call from "./Call";
import LogoName from "./LogoName";
import WishCount from "../WishList/WishCount";
import { FaSearch } from "react-icons/fa";
import SideSearchBar from "./Search/SideSearchBar";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const [sideSearchBar, setSideSearchBar] = useState(false);
  // console.log(user);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleSideSearchBar = () => {
    setSideSearchBar(!sideSearchBar);
  };

  return (
    <>
      <nav className=" w-full sticky top-0 z-50 drop-shadow-sm bg-white  text-slate-600 ">
        {/* top navbar for MD and Long devices */}
        <div className="md:block hidden my-container mx-10">
          <div className="flex my-container py-2  items-center justify-between">
            <Search />
            <LogoName />
            {/* cart and profile */}
            <div className="flex items-center gap-4">
              {/* small device */}

              <div className="flex items-center md:gap-8 gap-5 justify-end">
                <Call />
                <NavLink
                  to="dashboard/wishlist"
                  className={({ isActive }) =>
                    isActive ? "active relative w-10" : "default relative w-10"
                  }>
                  <WishCount />
                </NavLink>
                <UserDropdown />
              </div>
            </div>
          </div>
          <hr className="h-px my-container bg-gray-200 border-[1px] dark:bg-gray-700" />
          <div className="  hidden font-mono z-50 md:flex pt-2 pb-1 justify-center items-center">
            <ul className="flex justify-center items-center gap-8 menu-horizontal">
              <NavItems />
            </ul>
          </div>
        </div>

        {/* Top navbar for small devices */}
        <div className="w-full bg-white z-50">
          <nav className="flex my-container py-2 md:hidden justify-between items-center">
            {/* NavItems */}
            <div className=" z-40   lg:hidden block">
              <div className="dropdown" onClick={handleShowNavbar}>
                {showNavbar ? (
                  <RxCross2 className="h-8 w-8 hover:text-[#75934e]" />
                ) : (
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 hover:text-[#75934e]"
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

              <ul
                className={`absolute ${
                  showNavbar ? "left-0" : "-left-96"
                } transform duration-500 top-[58px] grid justify-start items-start gap-3 z-40 font-semibold drop-shadow-2xl  p-4 rounded-br-lg bg-white text-black shadow-xl hover:shadow-2xl whitespace-nowrap`}>
                <NavItems />
              </ul>
            </div>
            {/* Name and logo */}
            <div className="w-full border-x-[2px] border-gray-300 grid justify-center mx-5">
              <LogoName />
            </div>
            {/* Facebook Link */}
            <button
              onClick={handleSideSearchBar}
              title="SEARCH"
              className="font-semibold text-base uppercase whitespace-nowrap tracking-wide text-slate-600 hover:text-[#75934e] transition-colors duration-300">
              <div className="flex flex-col gap-1 items-center">
                <FaSearch className="text-xl" />
              </div>
            </button>
          </nav>
        </div>
      </nav>
      <div
        className={`fixed bg-white h-full w-full max-w-[350px] pb-4 p-2 ${
          sideSearchBar ? "right-0" : "-right-[1700px]"
        } transform duration-700 shadow-2xl top-0 z-[10000]`}>
        <SideSearchBar handleSideSearchBar={handleSideSearchBar} />
      </div>
    </>
  );
};
export default Navbar;
