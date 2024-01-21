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
        className="hover:text-[#47720f] relative ">
        <div className="flex items-center gap-1 hover:text-[#47720f]">
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
          <MdKeyboardArrowDown className="text-xl text-[#75934e] " />
        </div>
        {menItems && (
          <div
            onMouseEnter={openMenCollection}
            onMouseLeave={closeMenCollection}
            className={`md:absolute md:top-6 ${
              menItems ? "md:left-0 left-32" : ""
            } md:drop-shadow-2xl z-50  grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2`}>
            <Link
              to="/collection/men"
              onClick={() => {
                handleSelectCategory("t-shirt"), handleCollection("men");
              }}
              className="hover:text-[#75934e]">
              Premium T-Shirt
            </Link>
            <hr />
            <Link
              to="/collection/men"
              onClick={() => {
                handleSelectCategory("polo shirt"), handleCollection("men");
              }}
              className="hover:text-[#75934e]">
              Polo Shirt
            </Link>
            <hr />
            <Link
              to="/collection/men"
              onClick={() => {
                handleSelectCategory("panjabi"), handleCollection("men");
              }}
              className="hover:text-[#75934e]">
              Luxury Panjabi
            </Link>
            <hr />
            <Link
              to="/collection/men"
              onClick={() => {
                handleSelectCategory("pants"), handleCollection("men");
              }}
              className="hover:text-[#75934e]">
              Pants
            </Link>
          </div>
        )}
      </li>
      {/* Women COllection*/}
      <li
        onMouseEnter={openWomenCollection}
        onMouseLeave={closeWomenCollection}
        className="hover:text-[#47720f] relative ">
        <div className="flex items-center gap-1 hover:text-[#47720f]">
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
          <MdKeyboardArrowDown className="text-xl text-[#75934e] " />
        </div>
        {womenItems && (
          <div
            onMouseEnter={openWomenCollection}
            onMouseLeave={closeWomenCollection}
            className={`md:absolute md:top-6 ${
              womenItems ? "md:left-0 left-32" : ""
            } md:drop-shadow-2xl z-50  grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2`}>
            <Link
              to="/collection/women"
              onClick={() => {
                handleSelectCategory("sari"), handleCollection("women");
              }}
              className="hover:text-[#75934e]">
              Sari
            </Link>
            <hr />
            <Link
              to="/collection/women"
              onClick={() => {
                handleSelectCategory("combo pack"), handleCollection("women");
              }}
              className="hover:text-[#75934e]">
              Compo Pack
            </Link>
            <hr />
            <Link
              to="/collection/women"
              onClick={() => {
                handleSelectCategory("three pieces"), handleCollection("women");
              }}
              className="hover:text-[#75934e]">
              Three Pieces
            </Link>
          </div>
        )}
      </li>
      <li
        onMouseEnter={openGadgetsCollection}
        onMouseLeave={closeGadgetsCollection}
        className="relative hover:text-[#47720f]">
        <div className="flex items-center gap-1 hover:text-[#47720f]">
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
          <MdKeyboardArrowDown className="text-xl text-[#75934e] " />
        </div>
        {gadgetItems && (
          <div
            onMouseEnter={openGadgetsCollection}
            onMouseLeave={closeGadgetsCollection}
            className={`md:absolute md:top-6 ${
              gadgetItems ? "md:left-0 left-32" : ""
            } md:drop-shadow-2xl z-50  grid gap-[2px] text-xs whitespace-nowrap font-semibold  tracking-wide   transition-colors duration-300 bg-white text-slate-600 p-3 space-y-2`}>
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("audio"), handleCollection("gadgets");
              }}
              className="hover:text-[#75934e]">
              Audio
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("charger & cables"),
                  handleCollection("gadgets");
              }}
              className="hover:text-[#75934e]">
              Charger & Cables
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("power bank"), handleCollection("gadgets");
              }}
              className="hover:text-[#75934e]">
              Power Bank
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("mobile accessories"),
                  handleCollection("gadgets");
              }}
              className="hover:text-[#75934e]">
              Mobile Accessories
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("multi hub"), handleCollection("gadgets");
              }}
              className="hover:text-[#75934e]">
              Multi Hub
            </Link>
            <hr />
            <Link
              to="/collection/gadgets"
              onClick={() => {
                handleSelectCategory("storage"), handleCollection("gadgets");
              }}
              className="hover:text-[#75934e]">
              Storage
            </Link>
          </div>
        )}
      </li>
    </>
  );
};

export default NavItems;
