import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { SideWishlistContext } from "../../../Providers/SideWishListProvider";
import useWishlist from "../../../Hooks/useWishlist";
import { CategoryContext } from "../../../Providers/CategoryProvider";
import { WishlistContext } from "../../../Providers/WishlistProvider";
import Wishes from "../../../Shared/WishList/Wishes";

const PhoneWishlist = () => {
  const { sideWishlist, setSideWishlist } = useContext(SideWishlistContext);
  const { removeFromWishlist } = useContext(WishlistContext);

  // take category context-------------------
  const { updateCategory } = useContext(CategoryContext);

  const { filteredWishlist } = useWishlist();
  // console.log(filteredWishlist);

  return (
    <>
      <div
        className={`fixed bg-white h-full max-w-[350px] pb-4 p-2 ${
          sideWishlist ? "right-0" : "-right-[1700px]"
        } transform duration-700 shadow-2xl top-0 z-[50]`}>
        <div className="relative z-[400]">
          {/* heading with X */}
          <div className="flex justify-between items-center my-2">
            <p className="font-mono ps-4 uppercase font-semibold text-[26px]">
              Wishlist
            </p>
            <RxCross2
              onClick={() => setSideWishlist(!sideWishlist)}
              className="text-2xl bg-[#75934e] bg-opacity-60 transition-all duration-1000 text-white rounded-md hover:text-rose-500"
            />
          </div>
          <Wishes
            filteredWishlist={filteredWishlist}
            setSideWishlist={setSideWishlist}
            removeFromWishlist={removeFromWishlist}
            updateCategory={updateCategory}
          />
        </div>
      </div>
    </>
  );
};

export default PhoneWishlist;
