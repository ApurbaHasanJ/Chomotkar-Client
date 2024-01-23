import { Outlet } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import AdminNavItems from "../../Shared/DashNavItems/AdminNavitems";
import UserNavItems from "../../Shared/DashNavItems/UserNavItems";
import GeneralNavItems from "../../Shared/DashNavItems/GeneralNavItems";
import useAdmin from "../../Hooks/useAdmin";
import { Helmet } from "react-helmet-async";
import { RxCross2 } from "react-icons/rx";

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
      <Helmet>
        <title>Dashboard | Chomotkar</title>
      </Helmet>
      {/* Dashboard */}
      <>
        {/* sidebar for lg and md */}
        <div
          className={`bg-[#75934e] bg-opacity-60 ${
            adminLoading ? "-left-[400px]" : "left-0"
          } lg:block hidden pr-5 bg-fixed relative  w-[290px]  overflow-hidden transition-all shadow-2xl shadow-gray-500 pt-14 `}>
          <div className=" fixed">
            {/* title for large device */}
            <div className=" lg:block hidden w-full">
              <img
                className="md:w-44 mx-auto drop-shadow-2xl w-32"
                src="https://res.cloudinary.com/dezmmga9k/image/upload/v1705569203/Chomotkar/Logo/Untitled-2_bcblaa.png"
                alt=""
              />
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
        <div className="w-full ">
          <nav className="  sticky bg-[#96bb65]  top-0 right-0 w-full z-50  py-4 lg:hidden  ">
            {/* title for sm device */}
            <div className="flex px-3 w-full justify-between items-center">
              <div className="">
                <img
                  className="md:w-44 drop-shadow-2xl w-32"
                  src="https://res.cloudinary.com/dezmmga9k/image/upload/v1705569203/Chomotkar/Logo/Untitled-2_bcblaa.png"
                  alt=""
                />
              </div>
              {showDashboard ? (
                <button onClick={handleToggleDashboard}>
                  <RxCross2 className="w-11 h-7 ml-auto " title="MENU" />
                </button>
              ) : (
                <button onClick={handleToggleDashboard}>
                  <HiOutlineMenu className="w-11 h-7 ml-auto " title="MENU" />
                </button>
              )}
            </div>
            <div
              className={`fixed bg-[#96bb65] h-full pb-4 pr-2 ${
                showDashboard ? "left-0" : "-left-[400px]"
              } transform duration-700 shadow-2xl top-[62px] `}>
              <div className="md: pt-5 ">
                {isAdmin ? <AdminNavItems /> : <UserNavItems />}
                <hr className="h-[0.1px] w-4/6 mx-auto my-7 bg-white" />
                <GeneralNavItems />
              </div>
            </div>
          </nav>

          {/* all pages here */}
          <div className="w-full min-h-screen grid grid-cols-1 justify-center items-center">
            <Outlet />
          </div>
        </div>
      </>
    </div>
  );
};

export default Dashboard;
