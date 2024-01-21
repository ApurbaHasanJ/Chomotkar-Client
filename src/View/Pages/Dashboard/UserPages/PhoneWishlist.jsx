import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { FaCartPlus, FaDeleteLeft } from "react-icons/fa6";
import { SideWishlistContext } from "../../../Providers/SideWishListProvider";
import useWishlist from "../../../Hooks/useWishlist";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../../Providers/CategoryProvider";
import { WishlistContext } from "../../../Providers/WishlistProvider";

const PhoneWishlist = () => {
  const { sideWishlist, setSideWishlist } = useContext(SideWishlistContext);
  const { removeFromWishlist } = useContext(WishlistContext);

  // take category context-------------------
  const { updateCategory } = useContext(CategoryContext);

  const { filteredWishlist } = useWishlist();
  console.log(filteredWishlist);

  return (
    <>
      <div
        className={`fixed bg-white h-full  max-w-[350px] pb-4 p-2 ${
          sideWishlist ? "right-0" : "-right-[1700px]"
        } transform duration-700 shadow-2xl top-0 z-[50]`}>
        <div className="relative z-[400]">
          {/* heading with X */}
          <div className="flex justify-between items-center my-2">
            <p className="font-mono ps-4 uppercase font-semibold text-3xl">
              Wishlist
            </p>
            <RxCross2
              onClick={() => setSideWishlist(!sideWishlist)}
              className="text-2xl bg-[#75934e] bg-opacity-60 transition-all duration-1000 text-white rounded-md hover:text-rose-500"
            />
          </div>
          {filteredWishlist.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 overflow-y-scroll max-h-[calc(100vh-52px)] pb-6">
              {filteredWishlist &&
                filteredWishlist.map((product, index) => (
                  <div
                    key={index}
                    className=" p-4 text-sm h-fit text-slate-800 bg-[#75934e] bg-opacity-30 rounded-md drop-shadow-md">
                    <FaDeleteLeft
                      onClick={() => {
                        removeFromWishlist(product?._id);
                        setSideWishlist(!sideWishlist);
                      }}
                      className="text-2xl text-[#75934e] text-opacity-70 hover:text-red-500 absolute top-5 right-4"
                    />
                    <div className="flex  items-center gap-4">
                      <img
                        className="w-[85px]"
                        src={product?.photos[0].img}
                        alt=""
                      />
                      <div className="flex flex-col text-sm">
                        <div className="flex items-center gap-2">
                          <span>Colors: </span>
                          <div className="flex gap-1 items-center">
                            {product?.colors.map((color, index) => (
                              <div
                                key={index}
                                style={{ backgroundColor: color }}
                                className="w-3 h-3 rounded-full border-2 border-slate-400"></div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <span>Sizes:</span>
                          <div className="flex gap-2 flex-wrap">
                            {product?.sizes.map((size, index) => (
                              <span key={index} className="">
                                {size}.
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <span>Price: </span>
                          <span className="font-medium">
                            {product?.price}TK
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-end gap-2">
                      <h3>{product?.title}</h3>
                      <Link
                        to={`/quick-shop/${product?._id}`}
                        onClick={() => {
                          updateCategory(product?.subCategory);
                          setSideWishlist(!sideWishlist);
                        }}
                        className="bg-[#75934e] h-fit bg-opacity-60 hover:bg-[#517521] text-white shadow-lg hover:shadow-2xl px-2 py-1 rounded-sm font-medium font-g-mono">
                        <FaCartPlus className="text-lg" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="p-4 mt-10 text-sm text-center text-slate-800 bg-[#75934e] bg-opacity-30 rounded-md drop-shadow-md">
              No wishlist Available
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PhoneWishlist;
