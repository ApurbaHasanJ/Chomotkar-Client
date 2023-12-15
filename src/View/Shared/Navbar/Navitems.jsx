import { Link, NavLink } from "react-router-dom";
import Search from "./Search/Search";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

const NavItems = () => {
  const [panjabiItems, setPanjabiItems] = useState(false);
  const [tShirtItems, setTShirtItems] = useState(false);
  const [poloShirtItems, setPoloShirtItems] = useState(false);
  const [sweatshirtItems, setSweatshirtItems] = useState(false);
  const [faceMaskItems, setFaceMaskItems] = useState(false);
  const [hoodieItems, setHoodieItems] = useState(false);
  const [joggersItems, setJoggersItems] = useState(false);

  // T-shirt collection
  const openTShirtCollection = () => {
    setTShirtItems(true);
  };
  const closeTShirtCollection = () => {
    setTShirtItems(false);
  };

  // Panjabi collection
  const openPanjabiCollection = () => {
    setPanjabiItems(true);
  };

  const closePanjabiCollection = () => {
    setPanjabiItems(false);
  };

  // Polo shirt collection
  const openPoloShirtCollection = () => {
    setPoloShirtItems(true);
  };

  const closePoloShirtCollection = () => {
    setPoloShirtItems(false);
  };

  // Sweat shirt collection
  const openSweatshirtCollection = () => {
    setSweatshirtItems(true);
  };

  const closeSweatshirtCollection = () => {
    setSweatshirtItems(false);
  };

  // Face mask collection
  const openFaceMaskCollection = () => {
    setFaceMaskItems(true);
  };

  const closeFaceMaskCollection = () => {
    setFaceMaskItems(false);
  };

  // Hoodies collection
  const openHoodieCollection = () => {
    setHoodieItems(true);
  };

  const closeHoodieCollection = () => {
    setHoodieItems(false);
  };
  const openJoggersCollection = () => {
    setJoggersItems(true);
  };

  const closeJoggersCollection = () => {
    setJoggersItems(false);
  };

  return (
    <>
      {/* Home route */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          HOME
        </NavLink>
      </li>
      {/* T-SHIRT  collection*/}
      <li
        onMouseEnter={openTShirtCollection}
        onMouseLeave={closeTShirtCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <p>T-SHIRT</p>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {tShirtItems && (
          <div
            onMouseEnter={openTShirtCollection}
            onMouseLeave={closeTShirtCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link to="#" className="hover:text-rose-300">
              Premium T-Shirt
            </Link>
            <hr />
            <Link to="#" className="hover:text-rose-300">
              Solid T-Shirt
            </Link>
            <hr />
            <Link to="#" className="hover:text-rose-300">
              Long Sleeve T-Shirt
            </Link>
          </div>
        )}
      </li>
      {/* PANJABI COllection*/}
      <li
        onMouseEnter={openPanjabiCollection}
        onMouseLeave={closePanjabiCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <p>PANJABI</p>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {panjabiItems && (
          <div
            onMouseEnter={openPanjabiCollection}
            onMouseLeave={closePanjabiCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link to="#" className="hover:text-rose-300">
              Elite Panjabi
            </Link>
            <hr />
            <Link to="#" className="hover:text-rose-300">
              Digital Print
            </Link>
          </div>
        )}
      </li>

      {/* Polo shirt collection */}
      <li
        onMouseEnter={openPoloShirtCollection}
        onMouseLeave={closePoloShirtCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <p>POLO SHIRT</p>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {poloShirtItems && (
          <div
            onMouseEnter={openPoloShirtCollection}
            onMouseLeave={closePoloShirtCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link to="#" className="hover:text-rose-300">
              Passion Polo
            </Link>
          </div>
        )}
      </li>

      {/* Sweatshirt collection */}
      <li
        onMouseEnter={openSweatshirtCollection}
        onMouseLeave={closeSweatshirtCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <p>Sweatshirt</p>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {sweatshirtItems && (
          <div
            onMouseEnter={openSweatshirtCollection}
            onMouseLeave={closeSweatshirtCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link to="#" className="hover:text-rose-300">
              Stylish Sweatshirt
            </Link>
            <hr />
            <Link to="#" className="hover:text-rose-300">
              Winder Sweatshirt
            </Link>
          </div>
        )}
      </li>

      {/* Hoodie Collection*/}
      <li
        onMouseEnter={openHoodieCollection}
        onMouseLeave={closeHoodieCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <p>HOODIE</p>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {hoodieItems && (
          <div
            onMouseEnter={openHoodieCollection}
            onMouseLeave={closeHoodieCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link to="#" className="hover:text-rose-300">
              Graphics Hoodie
            </Link>
            <hr />
            <Link to="#" className="hover:text-rose-300">
              Solid Hoodie
            </Link>
          </div>
        )}
      </li>
      {/* Face mask collection */}
      <li
        onMouseEnter={openJoggersCollection}
        onMouseLeave={closeJoggersCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <p>Joggers</p>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {joggersItems && (
          <div
            onMouseEnter={openJoggersCollection}
            onMouseLeave={closeJoggersCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link to="#" className="hover:text-rose-300">
              Premium Joggers
            </Link>
          </div>
        )}
      </li>
      <li
        onMouseEnter={openFaceMaskCollection}
        onMouseLeave={closeFaceMaskCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <p>Face Mask</p>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {faceMaskItems && (
          <div
            onMouseEnter={openFaceMaskCollection}
            onMouseLeave={closeFaceMaskCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link to="#" className="hover:text-rose-300">
              7 Layer Face Mask
            </Link>
          </div>
        )}
      </li>
      <li className="lg:hidden block">
        <Search />
      </li>
    </>
  );
};

export default NavItems;
