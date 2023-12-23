import {
    FaCalendarAlt,
    FaCalendarCheck,
    FaHome,
    FaWallet,
  } from "react-icons/fa";
  import { FaCartShopping } from "react-icons/fa6";
  import { MdReviews } from "react-icons/md";
  import { NavLink } from "react-router-dom";
//   import useCart from "../../../hooks/useCart";
  
  const UserNavItems = () => {
    // const [carts]= useCart()
    return (
      <nav className="w-full font-g-mono">
        <ul className="flex flex-col justify-start items-start md:gap-6 gap-3 ">
          <li>
            <NavLink
              to="/dashboard/user-home"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <FaHome className="w-14 h-6 md:mx-0 mx-auto" title="USER HOME" />
              <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
                USER HOME
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <FaCalendarAlt
                className="w-14 h-6 md:mx-0 mx-auto"
                title="RESERVATION"
              />
              <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
                RESERVATION
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/payment-history"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <FaWallet
                className="w-14 h-6 md:mx-0 mx-auto"
                title="PAYMENT HISTORY"
              />
              <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
                PAYMENT HISTORY
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-cart"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <div className="relative whitespace-nowrap">
              <FaCartShopping
                className="w-14 h-6 md:mx-0 mx-auto"
                title="MY CART"
              />
              <span className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 border border-white rounded-full -top-2 -end-2 ">
                {/* {carts?.length || 0} */}0
              </span>
              </div>
              <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
                MY CART
              </span>
              
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/my-bookings"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <FaCalendarCheck
                className="w-14 h-6 md:mx-0 mx-auto"
                title="MY BOOKINGS"
              />
              <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
                MY BOOKINGS
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-review"
              className={({ isActive }) =>
                isActive
                  ? "dashActive flex items-center justify-start gap-4"
                  : "dashDefault flex items-center justify-start gap-4"
              }>
              <MdReviews
                className="w-14 h-6 md:mx-0 mx-auto"
                title="ADD REVIEWS"
              />
              <span className="text-base font-semibold lg:block md:hidden block whitespace-nowrap">
                ADD REVIEWS
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default UserNavItems;