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
    <div className="border-2 drop-shadow-lg flex flex-col justify-between overflow-hidden w-full md:h-[500px] h-80 rounded-2xl border-[#75934e]">
      <div className="relative overflow-hidden ">
        <Link
          to={`/quick-shop/${product?._id}`}
          className="overflow-hidden"
          onClick={handleToggleModal}>
          <img
            className="scale-100  rounded-xl max-w-[390.663px] max-h-[390.663px] h-full w-full hover:scale-110 transform duration-500"
            loading="lazy"
            src={product?.photos[0]?.img}
            alt={product.title}
          />
        </Link>
        {/* Add to Wishlist */}
        <div
          onClick={handleAddWishlist}
          className="p-2 drop-shadow-2xl shadow-2xl duration-500 absolute top-3 bg-white rounded-full right-3 text-black hover:text-[#75934e] font-semibold ">
          <FaRegHeart className="text-xl" />
        </div>
      </div>

      {/* title & price */}
      <div className="text-center">
        <p className="text-slate-400 hover:text-black duration-300 text-sm md:text-base mt-4">
          Brand: {product?.productBy}
        </p>
        <p className="my-2  hover:text-[#47720f] duration-300 md:text-lg font-mono">
          {product?.title}
        </p>
        <div className="text-slate-800 flex justify-center items-center gap-2 text-base font-medium font-mono">
          {product?.newPrice ? (
            <div className="flex justify-center items-center gap-2">
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
