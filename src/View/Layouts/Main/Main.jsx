import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import BottomNavbar from "../../Shared/Navbar/BottomNavbar";
import Footer from "../../Shared/Footer/Footer";
import WhatsApp from "../../Shared/Whatsapp/WhatsApp";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import useProducts from "../../Hooks/useProducts";
import Cart from "../../Shared/Cart/Cart";

const Main = () => {
  const { loading } = useContext(AuthContext);
  const [, productsLoading] = useProducts();
  return (
    <main>
      {loading || productsLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Outlet />
          <div className="border shadow-xl p-3 fixed z-[100] right-0 top-1/2 transform -translate-y-1/2">
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
