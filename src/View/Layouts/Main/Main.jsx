import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import BottomNavbar from "../../Shared/Navbar/BottomNavbar";
import Footer from "../../Shared/Footer/Footer";
import WhatsApp from "../../Shared/Whatsapp/WhatsApp";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import useProducts from "../../Hooks/useProducts";
import Cart from "../../Shared/Cart/Cart";
import PhoneMyCarts from "../../Pages/Dashboard/UserPages/PhoneMyCarts";
import PhoneWishlist from "../../Pages/Dashboard/UserPages/PhoneWishlist";
import Popup from "../../Shared/Popups/Popup";

const Main = () => {
  const { loading } = useContext(AuthContext);
  const [, productsLoading] = useProducts();
  const location = useLocation();
  const [visitedBefore, setVisitedBefore] = useState(false);

  // Check if the current path is the home page
  const isLoginOrRegister =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");

  useEffect(() => {
    // Check sessionStorage for the "visitedBefore" flag
    const hasVisitedBefore = sessionStorage.getItem("visitedBefore");
    if (hasVisitedBefore) {
      // User has visited before in this session
      setVisitedBefore(true);
    } else {
      // User is visiting for the first time in this session
      // Set the flag in sessionStorage
      sessionStorage.setItem("visitedBefore", "true");
    }
  }, []);

  return (
    <main className="">
      {loading || productsLoading ? (
        <div className="h-screen grid justify-center items-center">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />

          {isLoginOrRegister || (!visitedBefore && <Popup />)}
          <Outlet />
          <div className="border bg-[#75934e] shadow-xl p-3 fixed z-[49] right-0 top-1/2 transform -translate-y-1/2">
            <Cart />
          </div>
          <PhoneMyCarts />
          <PhoneWishlist />
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
