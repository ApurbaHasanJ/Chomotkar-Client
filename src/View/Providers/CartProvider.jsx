import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const totalQuantity = carts.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    getCart();
  }, []);

  //   get cart
  const getCart = () => {
    const currentCart =
      JSON.parse(localStorage.getItem("ChomotkarFashionCart")) || [];
    setCarts(currentCart);
    return currentCart || [];
  };

  // add to cart
  const handleAddCart = (quantity, productId, color, size) => {
    const currentCart =
      JSON.parse(localStorage.getItem("ChomotkarFashionCart")) || [];

    const existingItemIndex = currentCart.findIndex(
      (item) =>
        item.productId === productId &&
        item.color === color &&
        item.size === size
    );

    // set item to the cart
    if (existingItemIndex < 0) {
      const newItem = { productId, quantity: +quantity, color, size }; // Ensure quantity is a number
      currentCart.push(newItem);
    } else {
      currentCart[existingItemIndex].quantity += +quantity; // Convert quantity to number before addition
    }

    // save to local storage
    localStorage.setItem("ChomotkarFashionCart", JSON.stringify(currentCart));

    // update state
    setCarts(currentCart);
    toast.success("Item added to the cart!");
  };

  // remove product id from cart
  const handleRemoveCart = (productId, color, size) => {
    const currentCart =
      JSON.parse(localStorage.getItem("ChomotkarFashionCart")) || [];

    const updatedCart = currentCart.filter(
      (item) =>
        item.productId !== productId ||
        item.color !== color ||
        item.size !== size 
    );

    // save to local storage
    localStorage.setItem("ChomotkarFashionCart", JSON.stringify(updatedCart));

    // update state
    setCarts(updatedCart);
    toast.success("Item removed from the cart!");
  };

  return (
    <CartContext.Provider
      value={{ carts, handleAddCart, handleRemoveCart, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
