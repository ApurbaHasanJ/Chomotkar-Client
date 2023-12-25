import { Outlet } from "react-router-dom";

import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import AdminNavItems from "../../Shared/DashNavItems/AdminNavitems";
import UserNavItems from "../../Shared/DashNavItems/UserNavItems";
import GeneralNavItems from "../../Shared/DashNavItems/GeneralNavItems";
import LogoName from "../../Shared/Navbar/LogoName";

const Dashboard = () => {
  let [showDashboard, setShowDashboard] = useState(false);
  const admin = false;

  const handleToggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className={` md:flex ${showDashboard ? "bg-gray-50" : ""} `}>
      {/* Dashboard */}

      {/* sidebar for lg and md */}
      <div className="bg-[#ff7675] md:block hidden pr-2 bg-fixed relative max-w-xs lg:min-w-[260px] w-[90px] h-auto mx-auto overflow-hidden transition-all shadow-2xl shadow-gray-500 pt-14 ">
        <div className=" fixed">
          {/* title for large device */}
          <div className=" lg:block hidden md:ml-4 mx-auto">
            <h2 className="md:text-3xl text-2xl font-black font-cinzel whitespace-nowrap">
              Chomotkar
            </h2>
            <p className="font-[Cinzel] font-bold tracking-[5px] md:tracking-[9.12px]">
              Fashion
            </p>
          </div>
          {/* logo for smaller device */}
          <div className="w-14 h-14 ml-3 lg:hidden block drop-shadow-2xl  rounded-2xl bg-white p-2">
            <LogoName />
          </div>
          {/* Nav items for lg and md  */}
          <div className="mt-16  md:ml-2 w-full">
            {admin ? <AdminNavItems /> : <UserNavItems />}
            <hr className="h-[0.1px] w-4/6 mx-auto my-7 bg-white" />
            <GeneralNavItems />
          </div>
        </div>
      </div>

      {/* Top bar for */}
      <nav className="bg-[#ff7675] sticky top-0 z-50  py-4 md:hidden block ">
        {/* title for sm device */}
        <div className="flex justify-between items-center">
          <div className="block md:hidden md:ml-4 mx-6">
            <h2 className="md:text-4xl text-2xl font-black font-cinzel whitespace-nowrap">
              Chomotkar
            </h2>
            <p className="font-[Cinzel] font-bold tracking-[5px] md:tracking-[9.12px]">
              Fashion
            </p>
          </div>
          <button onClick={handleToggleDashboard}>
            <HiOutlineMenu className="w-14 h-7 md:mx-0 ml-auto" title="MENU" />
          </button>
        </div>
        <div
          className={`fixed bg-[#ff7675] h-full pb-4 pr-2 ${
            showDashboard ? "left-0" : "-left-[400px]"
          } transform duration-700 shadow-2xl top-[85px] `}>
          <div className="md: pt-5 ">
            {admin ? <AdminNavItems /> : <UserNavItems />}
            <hr className="h-[0.1px] w-4/6 mx-auto my-7 bg-white" />
            <GeneralNavItems />
          </div>
        </div>
      </nav>

      {/* all pages here */}
      <div className="w-full h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
