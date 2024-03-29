import { useContext } from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const UserDropdown = ({ handleToggleDropDown }) => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useAdmin();

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
      .catch(() => {
        // console.log(err.message);
        Swal.fire({
          icon: "error",
          title: "Error logout user",
          text: "Please try again.",
        });
      });
  };

  return (
    <div
      id="user-dropdown-card"
      className="md:text-sm text-xs grid justify-start items-start font-semibold md:drop-shadow-2xl p-2 rounded-md bg-white text-black border md:shadow-xl hover:shadow-2xl whitespace-nowrap">
      {user ? (
        <>
          <div className="px-4 py-3">
            <span className="block text-gray-900 dark:text-white">
              {user?.displayName}
            </span>
            <span className="block  text-gray-500 truncate dark:text-gray-400">
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
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="dashboard/feedback"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Feedback
              </Link>
            </li>

            <li>
              <Link
                to="#"
                onClick={handleLogout}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                Sign out
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <ul>
          <li>
            <Link
              onClick={handleToggleDropDown}
              to={`/dashboard/${
                adminLoading
                  ? "loading..."
                  : isAdmin
                  ? "admin-home"
                  : "user-home"
              }`}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="dashboard/feedback"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Feedback
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggleDropDown}
              to="/login"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Login
            </Link>
          </li>
          <li>
            <Link
              onClick={handleToggleDropDown}
              to="/register"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Register
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserDropdown;
