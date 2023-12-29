import { Outlet } from "react-router-dom";

import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import AdminNavItems from "../../Shared/DashNavItems/AdminNavitems";
import UserNavItems from "../../Shared/DashNavItems/UserNavItems";
import GeneralNavItems from "../../Shared/DashNavItems/GeneralNavItems";
import useAdmin from "../../Hooks/useAdmin";
import Loader from "../../Shared/Loader/Loader";

const Dashboard = () => {
  let [showDashboard, setShowDashboard] = useState(false);
  // const admin = true;
  // take admin to the server
  const [isAdmin, adminLoading] = useAdmin();

  const handleToggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className={` md:flex ${showDashboard ? "bg-gray-50" : ""} `}>
      {/* Dashboard */}
      {adminLoading ? (
        <Loader />
      ) : (
        <>
          {/* sidebar for lg and md */}
          <div className="bg-[#D1A054] lg:block hidden pr-5 bg-fixed relative  w-[290px]  overflow-hidden transition-all shadow-2xl shadow-gray-500 pt-14 ">
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

              {/* Nav items for lg and md  */}
              <div className="mt-16  md:ml-2 w-full">
                {isAdmin ? <AdminNavItems /> : <UserNavItems />}
                <hr className="h-[0.1px] w-4/6 mx-auto my-7 bg-white" />
                <GeneralNavItems />
              </div>
            </div>
          </div>

          {/* Top bar for */}
          <div className="w-full">
            <nav className="bg-[#D1A054]  sticky top-0 right-0 w-full z-50  py-4 lg:hidden  ">
              {/* title for sm device */}
              <div className="flex w-full justify-between items-center">
                <div className=" md:ml-4 mx-6">
                  <h2 className="md:text-4xl text-2xl font-black font-cinzel whitespace-nowrap">
                    Chomotkar
                  </h2>
                  <p className="font-[Cinzel] font-bold tracking-[5px] md:tracking-[9.12px]">
                    Fashion
                  </p>
                </div>
                <button onClick={handleToggleDashboard}>
                  <HiOutlineMenu className="w-14 h-7 ml-auto" title="MENU" />
                </button>
              </div>
              <div
                className={`fixed bg-[#D1A054] h-full pb-4 pr-2 ${
                  showDashboard ? "left-0" : "-left-[400px]"
                } transform duration-700 shadow-2xl top-[85px] `}>
                <div className="md: pt-5 ">
                  {isAdmin ? <AdminNavItems /> : <UserNavItems />}
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
        </>
      )}
    </div>
  );
};

export default Dashboard;
