import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    getCart();
  }, []);

  //   get cart
  const getCart = () => {
    const currentCart = JSON.parse(
      localStorage.getItem("ChomotkarFashionCart")
    );

    setCarts(currentCart || []);
    return currentCart || [];
  };

  const handleAddCart = (quantity, productId) => {
    const currentCart =
      JSON.parse(localStorage.getItem("ChomotkarFashionCart")) || [];

    const existingItemIndex = currentCart.findIndex(
      (item) => item.productId === productId
    );

    // set item to the cart
    if (existingItemIndex < 0) {
      const newItem = { productId, quantity };
      currentCart.push(newItem);
    } else {
      // updating quantity if exist
      currentCart[existingItemIndex].quantity += quantity;
    }

    // save to local storage
    localStorage.setItem("ChomotkarFashionCart", JSON.stringify(currentCart));

    // update state
    setCarts(currentCart);
    toast.success("Item added to the cart!");
  };

  // remove product id from cart
  const handleRemoveCart = (productId) => {
    const currentCart =
      JSON.parse(localStorage.getItem("ChomotkarFashionCart")) || [];

    const updatedCart = currentCart.filter(
      (item) => item.productId !== productId
    );

    // save to local storage
    localStorage.setItem("ChomotkarFashionCart", JSON.stringify(updatedCart));

    // update state
    setCarts(updatedCart);
    toast.success("Item removed from the cart!");
  };

  return (
    <CartContext.Provider value={{ carts, handleAddCart, handleRemoveCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
