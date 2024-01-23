import { useContext } from "react";
import useProducts from "../../../Hooks/useProducts";
import { MdDeleteForever } from "react-icons/md";
import Loader from "../../../Shared/Loader/Loader";
import SectionTitle from "../../../Shared/SectionTitle";
import { FaCartPlus } from "react-icons/fa6";
import useWishlist from "../../../Hooks/useWishlist";
import { WishlistContext } from "../../../Providers/WishlistProvider";
import { CategoryContext } from "../../../Providers/CategoryProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Wishes from "../../../Shared/WishList/Wishes";
import { SideWishlistContext } from "../../../Providers/SideWishListProvider";

const Wishlist = () => {
  const { setSideWishlist } = useContext(SideWishlistContext);
  const [, productsLoading] = useProducts();
  const { filteredWishlist } = useWishlist();
  const { removeFromWishlist } = useContext(WishlistContext);

  // take category context-------------------
  const { updateCategory } = useContext(CategoryContext);
  // const { carts, handleAddCart } = useContext(CartContext);

  // const filteredWishlist = products.filter((product) =>
  //   wishlist.includes(product?._id)
  // );

  const handleDeleteFromWishlist = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromWishlist(productId);
      }
    });
  };

  return (
    <section className="pt-12  min-h-screen relative ">
      <SectionTitle
        title={"Manage Your Wishlist"}
        subtitle={"---Hurry Up!---"}
      />

      {/* table */}
      <div className="my-container md:mt-20 md:mb-20 mt-10 mb-10">
        <h2 className="md:text-2xl mb-3 uppercase  font-semibold font-g-mono whitespace-nowrap">
          Total Products: {filteredWishlist?.length}
        </h2>

        <div className="relative md:block hidden overflow-x-auto shadow-md   rounded-lg">
          {productsLoading ? (
            <Loader />
          ) : (
            <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
              <thead className="text-xs  text-white uppercase bg-[#75934e] bg-opacity-60 ">
                <tr>
                  <th scope="col" className="p-8 font-semibold">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ITEM IMAGE
                  </th>

                  <th scope="col" className="px-6 py-3">
                    COLORS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sizes
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PRICE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ADD TO CART
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredWishlist.map((product, index) => (
                  <tr
                    key={product?._id}
                    className="bg-white border-b py-10 hover:bg-gray-50 ">
                    <td className="w-4 p-8 font-semibold">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 grid items-center font-medium text-gray-900 whitespace-nowrap ">
                      <img
                        className="md:w-24 h-full object-cover w-16"
                        src={product?.photos[0]?.img}
                        alt={product?.title}
                        title={product?.title}
                      />
                      <span className="font-medium text-gray-900 whitespace-nowrap ">
                        {product?.title}
                      </span>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-1 font-medium text-gray-900 capitalize whitespace-nowrap ">
                      <div className="grid items-start">
                        {product?.colors.map((color, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="flex gap-1 p-2 text-xs text-gray-400 items-center">
                              <span
                                style={{ backgroundColor: color }}
                                className="w-[14px] h-[14px] rounded-full border-2 border-slate-400"></span>
                              <span className="capitalize">{color}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-1 font-medium text-gray-900 capitalize whitespace-nowrap ">
                      <td scope="row" className="px-6 py-4">
                        <div className="flex gap-2">
                          {product?.sizes.map((size, index) => (
                            <span key={index} className="">
                              {size}.
                            </span>
                          ))}
                        </div>
                      </td>
                    </th>

                    <td scope="row" className="px-6 py-4">
                      {product?.newPrice ? (
                        <div className="flex flex-col justify-start items-start gap-2">
                          <span className="line-through">
                            TK.{product?.price}
                          </span>
                          <span className="font-semibold">
                            TK.{product?.newPrice}
                          </span>
                        </div>
                      ) : (
                        <span>TK.{product?.price}</span>
                      )}
                    </td>
                    <td scope="row" className="px-6 py-4">
                      <Link to={`/quick-shop/${product?._id}`}>
                        <FaCartPlus
                          onClick={() => {
                            updateCategory(product?.subCategory);
                          }}
                          className="text-[#75934e] hover:text-[#47720f] rounded-md text-[32px]"
                        />
                      </Link>
                    </td>
                    <td scope="row" className=" px-6 py-4">
                      <MdDeleteForever
                        onClick={() => handleDeleteFromWishlist(product?._id)}
                        className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="md:hidden block">
          <Wishes
            filteredWishlist={filteredWishlist}
            setSideWishlist={setSideWishlist}
            removeFromWishlist={removeFromWishlist}
            updateCategory={updateCategory}
          />
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
