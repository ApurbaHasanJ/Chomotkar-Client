import { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { WishlistContext } from "../../Providers/WishlistProvider";

const WishCount = () => {
  const { wishlist } = useContext(WishlistContext);

  // console.log(wishlist);
  return (
    <div className="text-lg duration-300 text-slate-500 hover:text-rose-400 relative flex justify-center items-center gap-1">
      <FaHeart className="text-2xl " />
      <div className="absolute flex justify-center items-center rounded-full text-[12px] -right-2 bottom-0 text-white h-[18px] w-[18px] text-center bg-rose-300">
        <span>{wishlist?.length || 0}</span>
      </div>
    </div>
  );
};

export default WishCount;
