import { useContext } from "react";
import useProducts from "../../../../../Hooks/useProducts";
import { CartContext } from "../../../../../Providers/CartProvider";
import { FaBagShopping } from "react-icons/fa6";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdShoppingBasket } from "react-icons/md";
import { WishlistContext } from "../../../../../Providers/WishlistProvider";
import useReviews from "../../../../../Hooks/useReviews";
import { AuthContext } from "../../../../../Providers/AuthProvider";

const UserTopInfo = () => {
  const [reviews] = useReviews();
  const [products] = useProducts();
  const { carts } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const { user } = useContext(AuthContext);
  // console.log(reviews);
  const findReviews = reviews.filter(
    (review) => review?.reviewerEmail === user?.email
  );
  // console.log(findReviews);

  return (
    <div className="grid gap-5 lg:grid-cols-4 grid-cols-2 justify-center text-white mt-6 items-center">
      <div className="from-[#D3A256] bg-gradient-to-r w-full md:py-9 py-7 md:px-7 drop-shadow-2xl flex gap-4 justify-center items-center to-[#FDE8C0]  rounded-lg">
        <FaHeart className="text-4xl md:text-5xl" title="Customers" />
        <div>
          <h1 className="text-3xl ">{wishlist?.length || 0}</h1>
          <p className="text-xl">Wishlist</p>
        </div>
      </div>
      <div className="from-[#BB34F5] text-white bg-gradient-to-r w-full md:py-9 py-7 md:px-7 drop-shadow-2xl flex  gap-4 justify-center items-center to-[#FCDBFF]  rounded-lg">
        <FaBagShopping className="text-4xl md:text-5xl" title="Orders" />

        <div>
          <h1 className="text-3xl ">{carts?.length}</h1>
          <p className="text-xl">Carts</p>
        </div>
      </div>

      <div className="from-[#6AAEFF] bg-gradient-to-r w-full md:py-9 py-7 md:px-7 drop-shadow-2xl flex  gap-4 justify-center items-center to-[#B6F7FF]  rounded-lg">
        <MdShoppingBasket
          className="text-4xl md:text-5xl"
          title="Products"
        />
        <div>
          <h1 className="text-3xl ">{products?.length || "00"}</h1>
          <p className="text-xl">Products</p>
        </div>
      </div>
      <div className="from-[#FE4880] bg-gradient-to-r w-full md:py-9 py-7 md:px-7 drop-shadow-2xl flex  gap-4 justify-center items-center to-[#FECDE9]  rounded-lg">
        <FaStar className="text-4xl md:text-5xl" title="Products" />
        <div>
          <h1 className="text-3xl ">{findReviews?.length || "00"}</h1>
          <p className="text-xl">Ratings</p>
        </div>
      </div>
    </div>
  );
};

export default UserTopInfo;
