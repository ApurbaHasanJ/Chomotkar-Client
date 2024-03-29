import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Providers/CartProvider";
import { Link } from "react-router-dom";
import { SideCartContext } from "../../Providers/SideCartProvider";

const Popup = () => {
  const { totalQuantity } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  const { sideCart, setSideCart } = useContext(SideCartContext);

  useEffect(() => {
    // Check if there are items in the cart
    if (totalQuantity > 0) {
      // Show the popup after 3000 milliseconds (3 seconds)
      const timeoutId = setTimeout(() => {
        setShowPopup(true);
      }, 2000);

      // Clear the timeout when the component unmounts or when totalQuantity changes
      return () => clearTimeout(timeoutId);
    }
  }, [totalQuantity]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    // bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
    <>
      {showPopup && (
        <div className="fixed bg-[#75934e] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:p-8 p-2 py-4 md:max-w-sm max-w-xs w-full object-cover mx-auto shadow-md z-[100000] rounded-md transition-all duration-300 bg-[url('https://res.cloudinary.com/dezmmga9k/image/upload/v1705569205/Chomotkar/Logo/green_mockup3_z6peqh.jpg')]">
          <span
            className="absolute top-0 right-2 text-white hover:text-rose-500 cursor-pointer text-3xl transition-all duration-300"
            onClick={closePopup}>
            &times;
          </span>
          <p className="text-center mt-7 text-lg text-white">
            🎉 You have{" "}
            <strong className="text-rose-300">{totalQuantity}</strong> items in
            your cart! 🛒
          </p>
          <Link
            to="/dashboard/my-carts"
            className="md:grid hidden justify-center">
            <button className="bg-white text-indigo-500 text-xs md:text-base hover:bg-[#75934e] hover:text-white border-2 border-white px-4 duration-500 py-1 mt-4 rounded-full transition-all">
              View My Cart
            </button>
          </Link>
          <div className="md:hidden grid justify-center">
            <button
              onClick={() => setSideCart(!sideCart)}
              className="bg-white text-indigo-500 text-xs md:text-base hover:bg-[#75934e] hover:text-white border-2 border-white px-4 duration-500 py-1 mt-4 rounded-full transition-all">
              View My Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
