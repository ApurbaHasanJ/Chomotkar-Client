import { useContext } from "react";
import useProducts from "./useProducts";
import { WishlistContext } from "../Providers/WishlistProvider";

const useWishlist = () => {
  // const [filteredWishlist, setFilteredWishlist] = useState([]);
  const { wishlist } = useContext(WishlistContext);
  const [products] = useProducts();

  const filteredWishlist = products.filter((product) =>
    wishlist.includes(product?._id)
  );

  const newWishFirst = filteredWishlist.slice().reverse();

  return { filteredWishlist: newWishFirst };
};

export default useWishlist;
