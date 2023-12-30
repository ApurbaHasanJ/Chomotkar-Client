import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../../Hooks/useAdmin";

const UserDropdown = () => {
  const [isAdmin, adminLoading] = useAdmin();

  const { user, logOut } = useContext(AuthContext);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleToggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

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
      <ul className="ml-auto z-50 flex items-center justify-center gap-3">
        <li className="relative">
          <div
            onClick={handleToggleDropDown}
            className=" z-50 items-center flex gap-2 duration-300 text-slate-500 hover:text-rose-400 rounded-full">
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                className="w-8 h-8 rounded-full ring ring-rose-400 dark:ring-gray-500"
                alt={user?.displayName}
              />
            ) : (
              <div className="">
                <FaUserLarge
                  className="text-[22px] "
                  title={user?.displayName}
                />
              </div>
            )}
            <span>{!user && <p>Login/Join</p>}</span>
          </div>
          {showDropDown && (
            <div
              id="user-dropdown-card"
              className="absolute grid justify-start items-start right-0 z-40 top-12 font-semibold drop-shadow-2xl  p-2 rounded-lg bg-white text-black shadow-xl hover:shadow-2xl whitespace-nowrap">
              {user ? (
                <>
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user?.displayName}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {user?.email}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <Link
                        to={`/dashboard/${
                          adminLoading
                            ? "loading..."
                            : isAdmin
                            ? "admin-home"
                            : "user-home"
                        }`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Earnings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </>
              ) : (
                <ul>
                  <Link
                    onClick={handleToggleDropDown}
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Login
                  </Link>
                  <Link
                    onClick={handleToggleDropDown}
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    Register
                  </Link>
                </ul>
              )}
            </div>
          )}
        </li>
      </ul>
    </>
  );
};

export default UserDropdown;
