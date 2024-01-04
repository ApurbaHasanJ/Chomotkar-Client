import { useParams } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import SectionTitle from "../../SectionTitle";
import { useContext, useState } from "react";
import { FaBagShopping, FaCartPlus } from "react-icons/fa6";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { CartContext } from "../../../Providers/CartProvider";
import Checkout from "../../../Pages/Dashboard/UserPages/Checkout";

import toast from "react-hot-toast";

const QuickShop = () => {
  const params = useParams();
  const [products] = useProducts();
  const { handleAddCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [payCarts, setPayCarts] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sizeError, setSizeError] = useState(false);
  const [colorError, setColorError] = useState(false);
  // console.log(selectedSize);

  // console.log(quantity);
  // console.log(payCarts);
  // filter product
  const filterProduct = products.filter(
    (product) => product?._id === params?.id
  );
  const product = filterProduct[0];
  //   set main display image
  const [img, setImg] = useState(product?.photos[0]?.img);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  const handleSelectSize = (size) => {
    setSelectedSize(selectedSize === size ? null : size);
  };
  const handleSelectColor = (color) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  return (
    <section className="pt-8   lg:min-h-screen ">
      {toggleModal ? (
        <Checkout handleToggleModal={handleToggleModal} payCarts={payCarts} />
      ) : (
        <>
          <SectionTitle
            title={"Product Spotlight"}
            subtitle={"---Order Now!---"}
          />

          <div className="my-container mt-20">
            <div className="flex md:flex-row flex-col gap-10">
              <div className="flex md:flex-row flex-col-reverse gap-7 md:w-7/12 w-full">
                <div className="flex md:flex-col gap-3">
                  {/* photos */}
                  {product?.photos.map((photo, index) => (
                    <img
                      key={index}
                      onClick={() => setImg(photo?.img)}
                      className="lg:w-[132px] lg:h-[132px] w-[100px] h-[100px] max-w-[132px] border hover:border-rose-300"
                      src={photo?.img}
                      alt={product?.title}
                    />
                  ))}
                </div>
                {/* photo */}

                {/* Image with zoom */}
                <div className="max-w-lg relative">
                  <InnerImageZoom
                    src={img}
                    zoomSrc={img}
                    zoomType="hover"
                    zoomScale={1}
                    zoomPreload={true}></InnerImageZoom>

                  <span className="absolute right-0 top-0 bg-black bg-opacity-50 text-white p-[2px] text-base">
                    Hover Me
                  </span>
                </div>
              </div>

              {/* description */}
              <div className="md:w-5/12 w-full">
                <div className="border-b-[3px] pb-4 border-slate-300">
                  <h2 className="text-3xl font-normal capitalize">
                    {product?.title}
                  </h2>
                  <div className="flex gap-2 mt-3 text-gray-500 font-medium text-base">
                    <span className="">Product By:</span>
                    <span>{product?.productBy}</span>
                  </div>
                  <div className="mb-6 flex gap-3">
                    <span className="font-medium sm">Price:</span>
                    {product?.newPrice ? (
                      <div className="flex justify-start items-start gap-1">
                        <span className="line-through text-gray-500">
                          TK.{product?.price}
                        </span>
                        <span className="font-semibold">
                          TK.{product?.newPrice}
                        </span>
                      </div>
                    ) : (
                      <span>TK.{product?.price}</span>
                    )}
                  </div>
                  <div className="my-6 flex flex-col items-start gap-2">
                    <span className="font-medium text-sm">Color:</span>

                    <div className="flex items-center gap-3">
                      {product?.colors.map((color, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <input
                            checked={selectedColor === color}
                            onChange={() => {
                              setColorError(false), handleSelectColor(color);
                            }}
                            type="checkbox"
                            className="w-4 h-4 border  border-gray-500 rounded bg-gray-50 focus:ring-2  checked:bg-rose-400 focus:ring-orange-300"
                            name={color}
                            id={color}
                          />
                          <div className="flex flex-col  border p-2 text-xs text-gray-400 items-center">
                            <span className="capitalize">{color}</span>
                            <span
                              style={{ backgroundColor: color }}
                              className="w-5 h-5 rounded-full border-2 border-slate-400"></span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {colorError && (
                      <p className="text-red-500">
                        Please select a color from here.
                      </p>
                    )}
                  </div>

                  {product?.sizes && (
                    <div className="flex flex-col justify-start gap-3">
                      <span className="font-medium text-sm">Select Size:</span>
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                          {product?.sizes.map((size, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-center gap-3">
                              <input
                                checked={selectedSize === size}
                                onChange={() => {
                                  setSizeError(false), handleSelectSize(size);
                                }}
                                type="checkbox"
                                className="w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-2  checked:bg-rose-400 focus:ring-orange-300"
                                name={size}
                                id={size}
                              />
                              <span className="border relative border-slate-300 p-1 px-3">
                                {size}
                              </span>
                            </div>
                          ))}
                        </div>
                        {sizeError && (
                          <p className="text-red-500">
                            Please select a size from here.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-5 flex lg:flex-row flex-col justify-start  gap-3">
                  <div className="bg-black rounded-lg flex items-center justify-start w-fit">
                    <span className="text-white px-5 font-semibold">
                      Quantity
                    </span>
                    <input
                      type="number"
                      className="w-16 rounded-e-lg border-slate-400 hover:shadow-lg placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                      min={1}
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleAddCart(1, product?._id);
                    }}
                    className="bg-[#D1A054] hover:bg-[#f15e5e] duration-500 justify-center p-1 px-3 gap-3 text-white flex items-center rounded-md text-lg">
                    <FaCartPlus className="text-xl" />
                    <span>Add To Cart</span>
                  </button>
                  <button
                    // disabled={!selectedSize}
                    onClick={() => {
                      if (product?.colors && !selectedColor) {
                        // Show a warning message or handle it as per your requirement
                        setColorError(true);
                        toast.error("Please select a color before buying!");
                        return;
                      }
                      if (product?.sizes && !selectedSize) {
                        // Show a warning message or handle it as per your requirement

                        setSizeError(true);
                        toast.error("Please select a size before buying!");
                        return;
                      }

                      setPayCarts({
                        ...product,
                        quantity,
                        color: selectedColor,
                        size: selectedSize,
                      });
                      handleToggleModal();
                    }}
                    className="bg-[#D1A054]  hover:bg-[#f15e5e] duration-500 justify-center p-1 px-3 gap-3 text-white flex items-center rounded-md text-lg">
                    <FaBagShopping className="text-xl" />
                    <span>Buy Now</span>
                  </button>
                </div>
                <p className="text-gray-500 mt-6 font-mono">
                  {product?.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default QuickShop;
