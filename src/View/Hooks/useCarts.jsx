import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Providers/CartProvider";
import useProducts from "./useProducts";
import Swal from "sweetalert2";

const useCarts = () => {
  const { carts, handleRemoveCart } = useContext(CartContext);
  const [products] = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter and enhance products based on cart data
    const updatedProducts = [];
    for (const cartItem of carts) {
      const matchingProduct = products.find(
        (product) => product._id === cartItem.productId
      );
      if (matchingProduct) {
        updatedProducts.push({
          ...matchingProduct,
          quantity: cartItem ? cartItem.quantity : 1,
          color: cartItem ? cartItem.color : "",
          size: cartItem ? cartItem.size : "",
        });
      }
    }

    const newCartFirst = updatedProducts.slice().reverse();

    setFilteredProducts(newCartFirst);
  }, [carts, products]);

  const handleDeleteItem = (productId, color, size) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this?!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleRemoveCart(productId, color, size);
      }
    });
  };

  // Return the filtered products array
  return { filteredProducts, handleDeleteItem };
};

export default useCarts;
