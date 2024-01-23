import { FaBook, FaHome, FaUsers } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { MdAddBox, MdDiscount, MdReviews } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminNavItems = () => {
  return (
    <nav className="w-full font-g-mono mt-8 md:mt-0">
      <ul className="flex flex-col justify-center ml-3 items-start md:gap-6 gap-3">
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaHome className="md:text-2xl text-lg md:mx-0 mx-auto" title="ADMIN HOME" />
            <span className="md:text-base text-xs font-semibold whitespace-nowrap">
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
              className="md:text-2xl text-lg md:mx-0 mx-auto"
              title="ADD PRODUCTS"
            />
            <span className="md:text-base text-xs font-semibold whitespace-nowrap">
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
              className="md:text-2xl text-lg md:mx-0 mx-auto"
              title="MANAGE PRODUCTS"
            />
            <span className="md:text-base text-xs font-semibold whitespace-nowrap">
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
              className="md:text-2xl text-lg md:mx-0 mx-auto"
              title="MANAGE ORDERS"
            />
            <span className="md:text-base text-xs font-semibold whitespace-nowrap">
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
            <FaUsers
              className="md:text-2xl text-lg md:mx-0 mx-auto"
              title="MANAGE USERS"
            />
            <span className="md:text-base text-xs font-semibold whitespace-nowrap">
              MANAGE USERS
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-coupons"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <MdDiscount
              className="md:text-2xl text-lg md:mx-0 mx-auto"
              title="MANAGE COUPONS"
            />
            <span className="md:text-base text-xs font-semibold whitespace-nowrap">
              MANAGE COUPONS
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-reviews"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <MdReviews
              className="md:text-2xl text-lg md:mx-0 mx-auto"
              title="MANAGE REVIEWS"
            />
            <span className="md:text-base text-xs font-semibold whitespace-nowrap">
              MANAGE REVIEWS
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavItems;
