import { FaBook, FaHome, FaUsers } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { MdAddBox } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminNavItems = () => {
  return (
    <nav className="w-full font-[Cinzel]">
      <ul className="md:grid flex md:gap-6 ">
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaHome className="w-14 h-6 md:mx-0 mx-auto" title="ADMIN HOME" />
            <span className="text-base font-semibold lg:block hidden whitespace-nowrap">
              ADMIN HOME
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add-products"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <MdAddBox
              className="w-14 h-6 md:mx-0 mx-auto"
              title="ADD PRODUCTS"
            />
            <span className="text-base font-semibold lg:block hidden whitespace-nowrap">
              ADD PRODUCTS
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-products"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaList
              className="w-14 h-6 md:mx-0 mx-auto"
              title="MANAGE PRODUCTS"
            />
            <span className="text-base font-semibold lg:block hidden whitespace-nowrap">
              MANAGE PRODUCTS
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-orders"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaBook
              className="w-14 h-6 md:mx-0 mx-auto"
              title="MANAGE ORDERS"
            />
            <span className="text-base font-semibold lg:block hidden whitespace-nowrap">
              MANAGE ORDERS
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-users"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaUsers className="w-14 h-6 md:mx-0 mx-auto" title="ALL USERS" />
            <span className="text-base font-semibold lg:block hidden whitespace-nowrap">
              ALL USERS
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavItems;
