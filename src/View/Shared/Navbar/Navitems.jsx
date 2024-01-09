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
  const [gadgetItems, setGadgetItems] = useState(false);
  const { handleSelectCollection } = useContext(CollectionContext);
  // take category context
  const { updateCategory } = useContext(CategoryContext);

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
  const openGadgetsCollection = () => {
    setGadgetItems(true);
  };

  const closeGadgetsCollection = () => {
    setGadgetItems(false);
  };

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
          <MdKeyboardArrowDown className="text-xl " />
        </div>
        {menItems && (
          <div
            onMouseEnter={openMenCollection}
            onMouseLeave={closeMenCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link
              to="/collection/men"
              onClick={() => {
                handleSelectCategory("t-shirt"), handleCollection("men");
              }}
              className="hover:text-rose-300">
              Premium T-Shirt
            </Link>
            <hr />
            <Link
              to="/collection/men"
              onClick={() => {
                handleSelectCategory("polo shirt"), handleCollection("men");
              }}
              className="hover:text-rose-300">
              Polo Shirt
            </Link>
            <hr />
            <Link
              to="/collection/men"
              onClick={() => {
                handleSelectCategory("panjabi"), handleCollection("men");
              }}
              className="hover:text-rose-300">
              Luxury Panjabi
            </Link>
            <hr />
            <Link
              to="/collection/men"
              onClick={() => {
                handleSelectCategory("pants"), handleCollection("men");
              }}
              className="hover:text-rose-300">
              Pants
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
          <MdKeyboardArrowDown className="text-xl " />
        </div>
        {womenItems && (
          <div
            onMouseEnter={openWomenCollection}
            onMouseLeave={closeWomenCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link
              to="/collection/women"
              onClick={() => {
                handleSelectCategory("sari"), handleCollection("women");
              }}
              className="hover:text-rose-300">
              Sari
            </Link>
            <hr />
            <Link
              to="/collection/women"
              onClick={() => {
                handleSelectCategory("combo-pack"), handleCollection("women");
              }}
              className="hover:text-rose-300">
              Compo Pack
            </Link>
            <hr />
            <Link
              to="/collection/women"
              onClick={() => {
                handleSelectCategory("three-pieces"), handleCollection("women");
              }}
              className="hover:text-rose-300">
              Three Pieces
            </Link>
          </div>
        )}
      </li>
      <li
        onMouseEnter={openGadgetsCollection}
        onMouseLeave={closeGadgetsCollection}
        className="flex items-center relative gap-1 hover:text-rose-400">
        <div className="flex items-center gap-1 hover:text-rose-400">
          <NavLink
            to="/collection/gadgetItems"
            onClick={() => {
              handleCollection("gadgets"), handleSelectCategory("");
            }}
            className={({ isActive }) => (isActive ? "active" : "default")}>
            <div className="flex items-center gap-1">
              <FaHeadphonesSimple className="text-lg" />
              <span>Gadgets</span>
            </div>
          </NavLink>
          <MdKeyboardArrowDown className="text-xl " />
        </div>
        {gadgetItems && (
          <div
            onMouseEnter={openGadgetsCollection}
            onMouseLeave={closeGadgetsCollection}
            className="absolute top-6 drop-shadow-2xl z-50 left-0 grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2">
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("audio"), handleCollection("gadgets");
              }}
              className="hover:text-rose-300">
              Audio
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("charger & cables"),
                  handleCollection("gadgets");
              }}
              className="hover:text-rose-300">
              Charger & Cables
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("power bank"), handleCollection("gadgets");
              }}
              className="hover:text-rose-300">
              Power Bank
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("mobile accessories"),
                  handleCollection("gadgets");
              }}
              className="hover:text-rose-300">
              Mobile Accessories
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("multi hub"), handleCollection("gadgets");
              }}
              className="hover:text-rose-300">
              Multi Hub
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("storage"), handleCollection("gadgets");
              }}
              className="hover:text-rose-300">
              Storage
            </Link>
          </div>
        )}
      </li>
    </>
  );
};

export default NavItems;
