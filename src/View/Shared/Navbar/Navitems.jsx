import { NavLink } from "react-router-dom";
import Search from "./Search/Search";

const NavItems = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/collection"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          COLLECTION
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          CONTACT
        </NavLink>
      </li>
      <li className="lg:hidden block">
        <Search />
      </li>

      {/* <>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              SIGN UP
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              LOGIN
            </NavLink>
          </li>
        </> */}
    </>
  );
};

export default NavItems;
