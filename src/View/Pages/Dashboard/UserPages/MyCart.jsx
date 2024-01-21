import { MdDeleteForever } from "react-icons/md";
import SectionTitle from "../../../Shared/SectionTitle";
import { useContext, useState } from "react";
import { CartContext } from "../../../Providers/CartProvider";
// import useProducts from "../../../Hooks/useProducts";
import Checkout from "./Checkout";
import toast from "react-hot-toast";
import useCarts from "../../../Hooks/useCarts";

const MyCart = () => {
  const { totalQuantity } = useContext(CartContext);
  // const [products] = useProducts();
  const { filteredProducts, handleDeleteItem } = useCarts();
  const [payCarts, setPayCarts] = useState({});
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState({
    id: "",
    color: "",
  });
  const [selectedSize, setSelectedSize] = useState({
    id: "",
    size: "",
  });

  const [toggleModal, setToggleModal] = useState(false);

  // console.log(payCarts);
  // console.log(selectedSize);

  // filter the cart products
  // useEffect(() => {
  //   // Update the quantity in the products list based on the carts data
  //   const updatedProducts = products
  //     .filter((product) =>
  //       carts.some((cart) => cart.productId === product?._id)
  //     )
  //     .map((product) => {
  //       const cartItem = carts.find((cart) => cart.productId === product?._id);
  //       return {
  //         ...product,
  //         quantity: cartItem ? cartItem.quantity : 1,
  //         color: cartItem ? cartItem.color : "",
  //         size: cartItem ? cartItem.size : "",
  //       };
  //     });

  //   setFilteredProducts(updatedProducts);
  // }, [carts, products]);

  // console.log(filteredProducts);

  // calculating total product price
  const totalPrice = filteredProducts.reduce((acc, product) => {
    const productPrice = product.newPrice ? product.newPrice : product.price;
    const totalProductPrice = productPrice * product.quantity;

    return acc + totalProductPrice;
  }, 0);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
    setSelectedSize({ id: "", size: "" });
    setSelectedColor({ id: "", color: "" });
  };

  // handle delete from cart

  return (
    <>
      <div className="py-8 pb-20  min-h-screen bg-[#F6F6F6]">
        {toggleModal ? (
          <Checkout handleToggleModal={handleToggleModal} payCarts={payCarts} />
        ) : (
          <>
            <SectionTitle
              title={"Wanna Add More?"}
              subtitle={"---My Cart!---"}
            />
            <div className="mt-20 my-container">
              <div className="md:flex grid items-center justify-between font-g-mono">
                <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold  whitespace-nowrap">
                  Total Products: {totalQuantity}
                </h2>
                <h2 className="md:text-2xl mb-3 uppercase text-xl font-semibold  whitespace-nowrap">
                  total price: TK.{totalPrice}
                </h2>
              </div>
              <div className="relative  overflow-x-auto shadow-md   rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right rounded-lg text-gray-500 ">
                  <thead className="text-xs  text-white uppercase bg-[#75934e] bg-opacity-60  ">
                    <tr>
                      <th scope="col" className="p-8 text-base">
                        #
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PRODUCT
                      </th>
                      <th scope="col" className="px-6 py-3">
                        COLORS
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Size
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PRICE
                      </th>
                      <th scope="col" className="px-6 py-3">
                        QUANTITY
                      </th>
                      <th scope="col" className="px-6 py-3">
                        TOTAL PRICE
                      </th>
                      <th scope="col" className="px-6 py-3">
                        PLACE ORDER
                      </th>

                      <th scope="col" className="px-6 py-3">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" w-full ">
                    {filteredProducts.map((cart, index) => (
                      <tr
                        key={cart?._id}
                        className="bg-white border-b   py-10 hover:bg-gray-50 ">
                        <td className="w-4 p-8">{index + 1}</td>
                        <th
                          scope="row"
                          className="px-6 py-4 grid items-center font-medium text-gray-900 whitespace-nowrap ">
                          <img
                            className="md:w-24 h-full object-cover w-16"
                            src={cart?.photos[0]?.img}
                            alt={cart?.title}
                            title={cart?.title}
                          />
                          <span className="font-medium text-gray-900 whitespace-nowrap ">
                            {cart?.title}
                          </span>
                        </th>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          <div className="grid items-start">
                            {cart?.colors.map((color, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-3">
                                <input
                                  checked={
                                    selectedColor.id === cart?._id &&
                                    selectedColor.color === color
                                  }
                                  onChange={() => {
                                    setSelectedColor({
                                      id: cart?._id,
                                      color: color,
                                    });
                                  }}
                                  type="checkbox"
                                  className="w-4 h-4 border  border-gray-500 rounded bg-gray-50 focus:ring-2 checked:bg-[#517521] focus:ring-orange-300"
                                  name={color}
                                  id={color}
                                />

                                <div className="flex gap-1 p-2 text-xs text-gray-400 items-center">
                                  <span
                                    style={{ backgroundColor: color }}
                                    className="w-5 h-5 rounded-full border-2 border-slate-400"></span>
                                  <span className="capitalize">{color}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </th>
                        <td scope="row" className="px-6 py-4">
                          <select
                            name="selectedSize"
                            // value={selectedSize}
                            // defaultValue={cart?.size || "none"}
                            onChange={(e) =>
                              setSelectedSize({
                                id: cart._id,
                                size: e.target.value,
                              })
                            }
                            className="input hover:shadow-md border rounded-lg p-3 border-slate-500 placeholder:focus:text-[#517521] focus:border-white focus:ring-[#517521]"
                            required>
                            {!cart?.sizes ? (
                              <option value={""}>none</option>
                            ) : (
                              <>
                                <option value="">Select</option>
                                {cart.sizes.map((size, index) => (
                                  <option
                                    key={index}
                                    defaultValue="none"
                                    value={size}>
                                    {size}
                                  </option>
                                ))}
                              </>
                            )}
                          </select>
                        </td>

                        <td scope="row" className="px-6 py-4">
                          {cart?.newPrice ? (
                            <div className="flex flex-col justify-start items-start gap-2">
                              <span className="line-through">
                                TK.{cart?.price}
                              </span>
                              <span className="font-semibold">
                                TK.{cart?.newPrice}
                              </span>
                            </div>
                          ) : (
                            <span className="font-semibold">
                              TK.{cart?.price}
                            </span>
                          )}
                        </td>
                        {/* quantity */}
                        <td scope="row" className="px-6 py-4">
                          {cart?.quantity}
                        </td>
                        {/* total amount */}
                        <td scope="row" className="px-6 py-4">
                          {cart?.newPrice ? (
                            <div className="flex flex-col whitespace-nowrap justify-start items-start ml-4 gap-2">
                              <span className="line-through">
                                TK.{cart?.price * cart?.quantity}
                              </span>
                              <span className="font-semibold">
                                TK.{cart?.newPrice * cart?.quantity}
                              </span>
                            </div>
                          ) : (
                            <span className="font-semibold ml-4">
                              TK.{cart?.price * cart?.quantity}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            type="button"
                            onClick={() => {
                              if (
                                cart?.colors &&
                                (!selectedColor ||
                                  cart._id !== selectedColor.id)
                              ) {
                                // Show a warning message or handle it as per your requirement

                                toast.error(
                                  "Please select a color before buying!"
                                );
                                return;
                              }
                              if (
                                cart?.sizes &&
                                (!selectedSize || cart._id !== selectedSize.id)
                              ) {
                                // Show a warning message or handle it as per your requirement
                                toast.error(
                                  "Please select a size before buying!"
                                );
                                return;
                              }

                              setPayCarts({
                                ...cart,
                                quantity: cart?.quantity,
                                color: !cart?.colors
                                  ? ""
                                  : selectedColor?.color,
                                size: !cart?.sizes ? "" : selectedSize?.size,
                              });
                              handleToggleModal();
                            }}
                            className="bg-[#75934e] bg-opacity-60 hover:bg-[#517521] text-white shadow-lg hover:shadow-2xl py-2 px-4 rounded-lg text-base font-semibold font-g-mono">
                            PAY
                          </button>
                        </td>

                        <td className=" px-6 py-4 h-full">
                          <MdDeleteForever
                            onClick={() =>
                              handleDeleteItem(
                                cart?._id,
                                cart?.color,
                                cart?.size
                              )
                            }
                            className="bg-red-600 hover:bg-red-700 text-center  p-1 rounded-md text-white text-[32px]"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MyCart;
