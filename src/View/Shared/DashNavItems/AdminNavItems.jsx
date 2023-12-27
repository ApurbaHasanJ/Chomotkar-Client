import { FaBook, FaHome, FaUsers } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { MdAddBox, MdDiscount } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminNavItems = () => {
  return (
    <nav className="w-full font-g-mono">
      <ul className="flex flex-col justify-start items-start md:gap-6 gap-3">
        <li>
          <NavLink
            to="/dashboard/admin-home"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaHome className="w-14 h-6 md:mx-0 mx-auto" title="ADMIN HOME" />
            <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
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
            <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
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
            <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
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
            <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
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
              className="w-14 h-6 md:mx-0 mx-auto"
              title="MANAGE USERS"
            />
            <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
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
              className="w-14 h-6 md:mx-0 mx-auto"
              title="MANAGE COUPON"
            />
            <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
              MANAGE COUPON
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavItems;
