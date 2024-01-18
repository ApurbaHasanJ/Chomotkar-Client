import { useContext } from "react";
import { WishlistContext } from "../../../Providers/WishlistProvider";
import useProducts from "../../../Hooks/useProducts";
import { MdDeleteForever } from "react-icons/md";
import Loader from "../../../Shared/Loader/Loader";
import SectionTitle from "../../../Shared/SectionTitle";
import { FaCartPlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import { CartContext } from "../../../Providers/CartProvider";

const Wishlist = () => {
  const { wishlist, removeFormWishlist } = useContext(WishlistContext);
  const [products, productsLoading] = useProducts();
  const { carts, handleAddCart } = useContext(CartContext);
  console.log(carts);

  const filterWishProducts = products.filter((product) =>
    wishlist.includes(product?._id)
  );

  // add to cart
  // const handleAddToCart = (quantity, productId)

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
        removeFormWishlist(productId);
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
      <div className="my-container my-20">
        <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold font-[Cinzel] whitespace-nowrap">
          Total Products: {filterWishProducts?.length}
        </h2>

        <div className="relative  overflow-x-auto shadow-md   rounded-lg">
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
                  ITEM NAME
                </th>

                <th scope="col" className="px-6 py-3">
                  COLORS
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
              {productsLoading ? (
                <tr className="h-96">
                  <td className="">
                    <Loader />
                  </td>
                </tr>
              ) : (
                filterWishProducts.map((product, index) => (
                  <tr
                    key={product?._id}
                    className="bg-white border-b py-10 hover:bg-gray-50 ">
                    <td className="w-4 p-8 font-semibold">{index + 1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      <img
                        className="md:w-28 md:h-full object-cover w-24"
                        src={product?.photos[0].img}
                        alt={product?.title}
                        title={product?.title}
                      />
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {product?.title}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-1 font-medium text-gray-900 capitalize whitespace-nowrap ">
                      {product?.colors
                        ? product?.colors.map((color, index) => (
                            <div
                              key={index}
                              className="flex gap-[2px] p-2 text-xs text-gray-400 items-center">
                              <span
                                style={{ backgroundColor: color }}
                                className="w-5 h-5 rounded-full border-2 border-slate-400"></span>
                              <span className="capitalize">{color}</span>
                            </div>
                          ))
                        : "none"}
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
                      <FaCartPlus
                        onClick={() => {
                          handleAddCart(1, product?._id);
                        }}
                        className="text-[#75934e] hover:text-[#47720f] rounded-md text-[32px]"
                      />
                    </td>
                    <td scope="row" className=" px-6 py-4">
                      <MdDeleteForever
                        onClick={() => handleDeleteFromWishlist(product?._id)}
                        className="bg-red-600 hover:bg-red-700  p-1 rounded-md text-white text-[32px]"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
