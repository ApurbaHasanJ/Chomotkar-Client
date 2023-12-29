import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Providers/CartProvider";
import { Link } from "react-router-dom";

const Popup = () => {
  const { totalQuantity } = useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if there are items in the cart
    if (totalQuantity > 0) {
      setShowPopup(true);
    }
  }, [totalQuantity]);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-8 shadow-md z-[100000] rounded-md transition-all duration-300">
          <span
            className="absolute top-2 right-2 text-white hover:text-rose-500 cursor-pointer text-3xl transition-all duration-300"
            onClick={closePopup}>
            &times;
          </span>
          <p className="text-center mt-5 text-lg text-white">
            🎉 You have{" "}
            <strong className="text-rose-300">{totalQuantity}</strong> items in
            your cart! 🛒
          </p>
          <Link to="/dashboard/my-carts" className="grid justify-center">
            <button className="bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white border-2 border-white px-4 duration-500 py-1 mt-4 rounded-full transition-all">
              View My Cart
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Popup;
