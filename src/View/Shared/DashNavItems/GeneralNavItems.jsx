import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdEmail, MdShoppingBag } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { useContext } from "react";
import { CollectionContext } from "../../Providers/CollectionProvider";

const GeneralNavItems = () => {
  const { handleSelectCollection } = useContext(CollectionContext);

  

  return (
    <nav className="w-full font-g-mono">
      <ul className="flex flex-col justify-center items-start ml-3 md:gap-6  gap-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaHome className="md:text-2xl text-lg md:mx-0 mx-auto" title="HOME" />
            <span className="md:text-base text-xs font-semibold  block whitespace-nowrap">
              HOME
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/collection/men"
            onClick={() => handleSelectCollection("men")}
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <MdShoppingBag className="md:text-2xl text-lg md:mx-0 mx-auto" title="SHOP" />
            <span className="md:text-base text-xs font-semibold  block whitespace-nowrap">
              SHOP
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <MdEmail className="md:text-2xl text-lg md:mx-0 mx-auto" title="CONTACT" />
            <span className="md:text-base text-xs font-semibold  block whitespace-nowrap">
              CONTACT US
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "dashActive flex items-center justify-start gap-4"
                : "dashDefault flex items-center justify-start gap-4"
            }>
            <FaInfoCircle
              className="md:text-2xl text-lg md:mx-0 mx-auto"
              title="About Us"
            />
            <span className="md:text-base text-xs font-semibold  block whitespace-nowrap">
              ABOUT US
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default GeneralNavItems;
