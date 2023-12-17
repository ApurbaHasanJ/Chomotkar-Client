import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import BottomNavbar from "../../Shared/Navbar/BottomNavbar";

const Main = () => {
  return (
    <main >
      <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        {/* bottom bar for only small devices */}
      <div className="">
        <BottomNavbar/>
        
      </div>
    </main>
  );
};

export default Main;
