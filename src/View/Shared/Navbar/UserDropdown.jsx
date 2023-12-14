import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Search from "./Search/Search";

const UserDropdown = () => {
  const { loading, user, logOut } = useContext(AuthContext);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown); // Toggle the state
  };

  // Handle click outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !showDropDown ||
        event.target.contains(document.getElementById("user-dropdown-card"))
      )
        return setShowDropDown(false); // Close dropdown on click outside
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showDropDown]); // Re-run on state change

  // Handle Logout
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          title: "Error logout user",
          text: "Please try again.",
        });
      });
  };
  return (
    <>
      <ul className="ml-auto flex items-center justify-center gap-3">
        <li className="relative">
          <div onClick={handleShowDropDown} className=" z-50 rounded-full">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                className="w-10 h-10 p-1 rounded-full ring-2 ring-rose-400 dark:ring-gray-500"
                alt={user?.displayName}
              />
            ) : (
              <div className="hover:text-rose-400">
                <FaUserCircle
                  className="text-[25px]  md:mx-0 border-[2px] border-gray-500 hover:border-rose-400 rounded-full p-[1.5px] mx-auto"
                  title={user?.displayName}
                />
              </div>
            )}
          </div>
          {showDropDown && (
            <div
              id="user-dropdown-card"
              className="absolute grid justify-start items-start right-0 z-40 top-12 font-semibold drop-shadow-2xl  p-2 rounded-lg bg-white text-black shadow-xl hover:shadow-2xl whitespace-nowrap">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Sign out
                  </Link>
                </li>
                <Search/>
              </ul>
            </div>
          )}
        </li>
        <li className="">
          <NavLink
            to="dashboard/my-cart"
            className={({ isActive }) =>
              isActive ? "active relative w-10" : "default relative w-10"
            }>
            <Cart />
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default UserDropdown;
