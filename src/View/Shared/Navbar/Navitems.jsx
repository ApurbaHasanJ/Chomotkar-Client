import { Link, NavLink } from "react-router-dom";

import { MdKeyboardArrowDown, MdMan, MdWoman } from "react-icons/md";
import { useContext, useState } from "react";
import { HiHome } from "react-icons/hi2";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { CategoryContext } from "../../Providers/CategoryProvider";
import { CollectionContext } from "../../Providers/CollectionProvider";

const NavItems = () => {
  const [womenItems, setWomenItems] = useState(false);
  const [menItems, setMenItems] = useState(false);
  const { handleSelectCollection } = useContext(CollectionContext);
  // take category context
  const { updateCategory } = useContext(CategoryContext);
  // const [electronicsItems, setElectronicsItems] = useState(false);

  // Men collection
  const openMenCollection = () => {
    setMenItems(true);
  };
  const closeMenCollection = () => {
    setMenItems(false);
  };

  // Women collection
  const openWomenCollection = () => {
    setWomenItems(true);
  };

  const closeWomenCollection = () => {
    setWomenItems(false);
  };

  // Electronics collection
  // const openElectronicsCollection = () => {
  //   setElectronicsItems(true);
  // };

  // const closeElectronicsCollection = () => {
  //   setElectronicsItems(false);
  // };

  // set collection function
  const handleCollection = (collection) => {
    handleSelectCollection(collection);
  };

  // category selection function
  const handleSelectCategory = (category) => {
    updateCategory(category);
  };

  return (
    <>
      {/* Home route */}
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}>
          <div className="flex items-center gap-1">
            <HiHome className="text-lg" />
            <span>HOME</span>
          </div>
        </NavLink>
      </li>
      {/* Men collection*/}
      <li
        onMouseEnter={openMenCollection}
        onMouseLeave={closeMenCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection/men"
            onClick={() => {
              handleCollection("men");
              handleSelectCategory("");
            }}
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <div className="flex items-center">
              <MdMan className="text-xl" />
              <p>MEN</p>
            </div>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {menItems && (
          <div
            onMouseEnter={openMenCollection}
            onMouseLeave={closeMenCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link
              to="/collection/men"
              onClick={() => handleSelectCategory("t-shirt")}
              className="hover:text-rose-300">
              Premium T-Shirt
            </Link>
            <hr />
            <Link
              to="/collection/men"
              onClick={() => handleSelectCategory("polo-shirt")}
              className="hover:text-rose-300">
              Polo Shirt
            </Link>
            <hr />
            <Link
              to="/collection/men"
              onClick={() => handleSelectCategory("panjabi")}
              className="hover:text-rose-300">
              Luxury Panjabi
            </Link>
            <hr />
            <Link
              to="/collection/men"
              onClick={() => handleSelectCategory("joggers")}
              className="hover:text-rose-300">
              Joggers
            </Link>
          </div>
        )}
      </li>
      {/* Women COllection*/}
      <li
        onMouseEnter={openWomenCollection}
        onMouseLeave={closeWomenCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection/women"
            onClick={() => {
              handleCollection("women"), handleSelectCategory("");
            }}
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <div className="flex items-center">
              <MdWoman className="text-xl" />
              <p>Women</p>
            </div>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {womenItems && (
          <div
            onMouseEnter={openWomenCollection}
            onMouseLeave={closeWomenCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link
              to="/collection/women"
              onClick={() => handleSelectCategory("sari")}
              className="hover:text-rose-300">
              Sari
            </Link>
            <hr />
            <Link
              to="/collection/women"
              onClick={() => handleSelectCategory("combo-pack")}
              className="hover:text-rose-300">
              Compo Pack
            </Link>
            <hr />
            <Link
              to="/collection/women"
              onClick={() => handleSelectCategory("three-pieces")}
              className="hover:text-rose-300">
              Three Pieces
            </Link>
          </div>
        )}
      </li>
      <li>
        <NavLink
          to="/collection/gadget"
          onClick={() => {
            handleCollection("gadget"), handleSelectCategory("");
          }}
          className={({ isActive }) => (isActive ? "active" : "default")}>
          <div className="flex items-center gap-1">
            <FaHeadphonesSimple className="text-lg" />
            <span>Gadgets</span>
          </div>
        </NavLink>
      </li>

      {/* Electronics collection */}
      {/* <li
        onMouseEnter={openElectronicsCollection}
        onMouseLeave={closeElectronicsCollection}
        className="hover:text-rose-400 relative ">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <p>Electronics</p>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl text-slate-500 hover:text-rose-400" />
        </div>
        {electronicsItems && (
          <div
            onMouseEnter={openElectronicsCollection}
            onMouseLeave={closeElectronicsCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link to="#" className="hover:text-rose-300">
              Passion Polo
            </Link>
          </div>
        )}
      </li> */}
    </>
  );
};

export default NavItems;
