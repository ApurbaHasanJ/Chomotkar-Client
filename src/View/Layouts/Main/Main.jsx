import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import BottomNavbar from "../../Shared/Navbar/BottomNavbar";
import Footer from "../../Shared/Footer/Footer";
import WhatsApp from "../../Shared/Whatsapp/WhatsApp";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import useProducts from "../../Hooks/useProducts";
import Cart from "../../Shared/Cart/Cart";
import Popup from "../../Shared/Popups/Popup";

const Main = () => {
  const { loading } = useContext(AuthContext);
  const [, productsLoading] = useProducts();
  const location = useLocation();

  // Check if the current path is login or signup
  const isLoginOrRegister =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");

  return (
    <main>
      {loading || productsLoading ? (
        <div className="h-screen grid justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          {isLoginOrRegister || <Popup />}
          <Outlet />
          <div className="border bg-[#75934e] shadow-xl p-3 fixed z-[100] right-0 top-1/2 transform -translate-y-1/2">
            <Cart />
          </div>
          <WhatsApp />
          <Footer />
          {/* bottom bar for only small devices */}
          <BottomNavbar />
        </>
      )}
    </main>
  );
};

export default Main;
