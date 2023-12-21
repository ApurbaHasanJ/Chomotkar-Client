import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import BottomNavbar from "../../Shared/Navbar/BottomNavbar";
import Footer from "../../Shared/Footer/Footer";
import WhatsApp from "../../Shared/Whatsapp/WhatsApp";

const Main = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <WhatsApp />
      <Footer />
      {/* bottom bar for only small devices */}
      <BottomNavbar />
    </main>
  );
};

export default Main;
