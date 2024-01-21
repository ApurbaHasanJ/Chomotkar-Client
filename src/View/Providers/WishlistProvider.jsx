import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const WishlistContext = createContext();
const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    getWishlist();
  }, []);

  // Function to add a product to the wishlist in local storage
  const addToWishlist = (productId) => {
    // Get the current wishlist from local storage
    let currentWishlist =
      JSON.parse(localStorage.getItem("ChomotkarFashionWishlist")) || [];

    if (currentWishlist) {
      setWishlist(currentWishlist);
    }

    // Check if the product is not already in the wishlist
    if (!currentWishlist.includes(productId)) {
      // Add the product to the currentWishlist
      currentWishlist.push(productId);

      // Save the updated wishlist back to local storage
      localStorage.setItem(
        "ChomotkarFashionWishlist",
        JSON.stringify(currentWishlist)
      );

      const newWishlist =
        JSON.parse(localStorage.getItem("ChomotkarFashionWishlist")) || [];

      if (newWishlist.length > currentWishlist.length) {
        setWishlist(newWishlist);
      }

      // Show a success toast
      toast.success("Product added to wishlist!");
    } else {
      // Show a custom toast for duplicate entry
      toast("Already in the wishlist!", {
        icon: "👏", // You can customize the icon
      });
    }
  };

  // remove id from wishlist
  const removeFromWishlist = (productId) => {
    let currentWishlist =
      JSON.parse(localStorage.getItem("ChomotkarFashionWishlist")) || [];

    const updatedWishlist = currentWishlist.filter(
      (wishlistProductId) => wishlistProductId != productId
    );

    localStorage.setItem(
      "ChomotkarFashionWishlist",
      JSON.stringify(updatedWishlist)
    );

    setWishlist(updatedWishlist);
    toast.success("Product removed from wishlist!");
  };

  const getWishlist = () => {
    const wishCount =
      JSON.parse(localStorage.getItem("ChomotkarFashionWishlist")) || [];
    setWishlist(wishCount);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
