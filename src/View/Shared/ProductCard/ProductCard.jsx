import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { WishlistContext } from "../../Providers/WishlistProvider";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../Providers/CategoryProvider";
import { Blurhash } from "react-blurhash";

const ProductCard = ({ product }) => {
  const { addToWishlist } = useContext(WishlistContext);
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  // take category context-------------------
  const { updateCategory } = useContext(CategoryContext);

  // Adding a product to wishlist
  const handleAddWishlist = () => {
    const productId = product?._id;
    addToWishlist(productId);
  };

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  // console.log(product);

  return (
    <div
      className={`${
        product?.quantity === 0 && "bg-green-100"
      } border-2 drop-shadow-lg flex flex-col justify-between overflow-hidden w-full md:h-[420px] h-[260px]  rounded-2xl border-[#75934e]`}>
      <div className="relative overflow-hidden aspect-w-1 aspect-h-1">
        <Link
          to={product?.quantity > 0 ? `/quick-shop/${product?._id}` : "#"}
          className="overflow-hidden object-cover block w-full h-full"
          onClick={() => {
            updateCategory(product?.subCategory), handleToggleModal();
          }}>
          {!imageLoaded && (
            <Blurhash
              hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              width={400}
              height={300}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
          <img
            className={`rounded-xl object-cover w-full h-full hover:scale-110 transform duration-500 
            ${imageLoaded ? "" : "hidden"}
            `}
            loading="lazy"
            src={product?.photos[0]?.img}
            alt={product.title}
            onLoad={() => setImageLoaded(!imageLoaded)}
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
        <p className="my-1  hover:text-[#47720f] duration-300 text-xs md:text-base font-mono">
          {product?.title}
        </p>
        <div className="text-slate-800 flex justify-center items-center gap-2 md:text-base text-xs font-medium font-mono">
          {product?.newPrice ? (
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="line-through text-gray-400">
                TK.{product?.price}
              </span>
              <span className="font-semibold">TK.{product?.newPrice}</span>
            </div>
          ) : (
            <span>TK.{product?.price}</span>
          )}
        </div>
      </div>
      {/* Quick shop button */}
      <button type="button">
        <Link
          to={product?.quantity > 0 ? `/quick-shop/${product?._id}` : "#"}
          onClick={() => {
            updateCategory(product?.subCategory), handleToggleModal();
          }}
          className={`flex md:text-xs md:mx-10 mx-4 mb-3  text-[8px] font-medium  shadow-2xl  items-center justify-center gap-1 rounded-full  text-white ${
            product?.quantity > 0
              ? "bg-[#75934e] hover:bg-[#47720f]"
              : "bg-gray-400 cursor-not-allowed"
          } px-8 py-[6px] md:px-12 md:py-3 duration-500 `}>
          <FiPlus />
          <span className="uppercase ">
            {product?.quantity > 0 ? "QuickShop" : "Sold Out"}
          </span>
        </Link>
      </button>
    </div>
  );
};

export default ProductCard;
