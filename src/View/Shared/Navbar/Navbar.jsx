import { useState } from "react";
import NavItems from "./Navitems";
import { RxCross2 } from "react-icons/rx";

import Search from "./Search/Search";
import UserDropdown from "./UserDropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  // console.log(user);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className="   sticky top-0 z-10 bg-white text-slate px-10 md:pt-4 md:pb-4 pt-3 pb-2.5">
      <div className="flex items-center justify-between">
        <div className="navbar-start">
          <Link to="/" className=" normal-case ">
            <div>
              <h2 className="md:text-xl  text-2xl font-black font-cinzel">
                Chomotkar
              </h2>
              <p className="font-cinzel text-xs font-bold tracking-[5px] md:tracking-[9.12px]">
                Fashion
              </p>
            </div>
          </Link>
        </div>
        <div className="  hidden  lg:flex">
          <ul className="flex items-center gap-4 menu-horizontal px-1">
            <NavItems />
          </ul>
        </div>
        {/* cart and profile */}
        <div className="flex items-center gap-4">
          <div className="lg:block hidden">
            <Search />
          </div>
          

          {/* small device */}
          <div className="navbar-end z-40  lg:hidden block">
            <div className="dropdown" onClick={handleShowNavbar}>
              {showNavbar ? (
                <RxCross2 className="h-6 w-6 hover:text-rose-500" />
              ) : (
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-rose-500"
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
              <ul className="absolute grid justify-start items-start right-0 z-40 top-[75px] font-semibold drop-shadow-2xl  p-4 rounded-l-lg bg-white text-black shadow-xl hover:shadow-2xl whitespace-nowrap">
                <NavItems />
              </ul>
            )}
          </div>
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
