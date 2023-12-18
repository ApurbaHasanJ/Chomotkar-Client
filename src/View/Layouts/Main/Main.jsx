import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import BottomNavbar from "../../Shared/Navbar/BottomNavbar";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  return (
    <main >
      <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        {/* bottom bar for only small devices */}
        <Footer/>
        <BottomNavbar/>
        
    </main>
  );
};

export default Main;
