import { FaCartPlus } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Wishes = ({removeFromWishlist, setSideWishlist, updateCategory, filteredWishlist}) => {
    return (
        <div>
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
                        setSideWishlist(false);
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
                          setSideWishlist(false);
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
    );
};

export default Wishes;