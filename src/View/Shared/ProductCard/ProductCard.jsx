import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { WishlistContext } from "../../Providers/WishlistProvider";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToWishlist } = useContext(WishlistContext);
  const [showModal, setShowModal] = useState(false);

  // Adding a product to wishlist
  const handleAddWishlist = () => {
    const productId = product?._id;
    addToWishlist(productId);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="border-2 drop-shadow-lg flex flex-col justify-between overflow-hidden w-full md:h-[450px] h-[330px]  rounded-2xl border-[#75934e]">
  <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
    <Link
      to={`/quick-shop/${product?._id}`}
      className="overflow-hidden block w-full h-full"
      onClick={handleToggleModal}
    >
      <img
        className="rounded-xl object-cover w-full h-full hover:scale-110 transform duration-500"
        loading="lazy"
        src={product?.photos[0]?.img}
        alt={product.title}
      />
    </Link>
        {/* Add to Wishlist */}
        <div
          onClick={handleAddWishlist}
          className="md:p-2 p-[6px] drop-shadow-2xl shadow-2xl duration-500 absolute top-3 bg-white rounded-full right-3 text-[#75934e] hover:text-[#47720f] font-semibold ">
          <FaRegHeart className="md:text-xl text-sm" />
        </div>
      </div>

      {/* title & price */}
      <div className="text-center px-[2px]">
        <p className="text-slate-400 hover:text-black duration-300 text-xs md:text-base mt-2">
          Brand: {product?.productBy}
        </p>
        <p className="my-1  hover:text-[#47720f] duration-300 text-xs md:text-base font-mono">
          {product?.title}
        </p>
        <div className="text-slate-800 flex justify-center items-center gap-2 text-base font-medium font-mono">
          {product?.newPrice ? (
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="line-through">TK.{product?.price}</span>
              <span className="font-semibold">TK.{product?.newPrice}</span>
            </div>
          ) : (
            <span>TK.{product?.price}</span>
          )}
        </div>
      </div>
      {/* Quick shop button */}
      <Link
        to={`/quick-shop/${product?._id}`}
        onClick={handleToggleModal}
        className="flex md:text-xs md:mx-10 mx-4 mb-3  text-[8px] font-medium  shadow-2xl  items-center justify-center gap-1 rounded-full  text-white bg-[#75934e] px-8 py-[6px] md:px-12 md:py-3 duration-500 hover:bg-[#47720f]">
        <FiPlus />
        <span className="uppercase ">QuickShop</span>
      </Link>
    </div>
  );
};

export default ProductCard;
