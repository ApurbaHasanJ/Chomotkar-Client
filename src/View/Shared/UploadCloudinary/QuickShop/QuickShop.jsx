import { useParams } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import SectionTitle from "../../SectionTitle";
import { useContext, useEffect, useState } from "react";
import { FaBagShopping, FaCartPlus } from "react-icons/fa6";
import Magnifier from "react-magnifier";

import { CartContext } from "../../../Providers/CartProvider";
import Checkout from "../../../Pages/Dashboard/UserPages/Checkout";

import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { RxCross2 } from "react-icons/rx";
import RelatedProduct from "../../RelatedProduct/RelatedProduct";

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
  const [measurement, setMeasurement] = useState(false);
  const [product, setProduct] = useState(null);
  //   set main display image
  const [img, setImg] = useState("");

  useEffect(() => {
    const filterProduct = products.filter(
      (product) => product?._id === params?.id
    );
    setProduct(filterProduct[0]);
    setImg(filterProduct[0]?.photos[0]?.img);
  }, [params, products]);

  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSelectSize = (size) => {
    setSelectedSize(selectedSize === size ? null : size);
  };
  const handleSelectColor = (color) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Disable scroll restoration when navigating away from this component
    const handleScrollRestoration = () => {
      window.history.scrollRestoration = "manual";
    };

    // Add event listener for scroll restoration
    window.addEventListener("beforeunload", handleScrollRestoration);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleScrollRestoration);
    };
  }, []);

  return (
    <div className="pt-8 mb-16 my-container  lg:min-h-screen ">
      <Helmet>
        <title>QuickShop | Chomotkar</title>
      </Helmet>
      <section className="mb-10 pb-10 border-b border-gray-400">
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
                  <div className="flex md:flex-col lg:gap-3 gap-1">
                    {/* photos */}
                    {product?.photos.map((photo, index) => (
                      <img
                        key={index}
                        onClick={() => setImg(photo?.img)}
                        className="lg:w-[132px] lg:h-[132px] w-[50px] h-[50px] max-w-[132px] border hover:border-rose-300"
                        src={photo?.img}
                        alt={product?.title}
                      />
                    ))}
                  </div>
                  {/* photo */}

                  {/* Image with zoom */}
                  <div className="max-w-lg w-full relative mx-auto">
                    <Magnifier
                      src={img}
                      width="100%"
                      mgWidth={200}
                      mgHeight={200}
                    />

                    <span className="absolute right-0 top-0 bg-black bg-opacity-50 text-white p-[2px] text-base">
                      Hover Me
                    </span>
                  </div>
                </div>

                {/* description */}
                <div className="md:w-5/12 w-full">
                  <div className="border-b-[3px] pb-4 border-slate-300">
                    <h2 className="md:text-3xl text-xl font-normal capitalize">
                      {product?.title}
                    </h2>
                    <div className="flex gap-2 mt-3  font-medium text-base">
                      <span className="">Brand:</span>
                      <span className="text-gray-500">
                        {product?.productBy}
                      </span>
                    </div>
                    <div className="mb-6 flex gap-3">
                      <span className="font-medium sm">Price:</span>
                      {product?.newPrice ? (
                        <div className="flex text-gray-500 justify-start items-start gap-1">
                          <span className="line-through text-gray-500">
                            TK.{product?.price}
                          </span>
                          <span className="font-semibold">
                            TK.{product?.newPrice}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-500 font-semibold">
                          TK.{product?.price}
                        </span>
                      )}
                    </div>
                    <div className="my-6 flex flex-col items-start gap-2">
                      <span className="font-medium text-sm">Color:</span>

                      <div className="flex flex-wrap items-center gap-3">
                        {product?.colors.map((color, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <input
                              checked={selectedColor === color}
                              onChange={() => {
                                setColorError(false), handleSelectColor(color);
                              }}
                              type="checkbox"
                              className="w-4 h-4 border  border-gray-500 rounded bg-gray-50 focus:ring-2  checked:bg-[#47720f] focus:ring-orange-300"
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
                        <span className="font-medium text-sm">
                          Select Size:
                        </span>
                        <div className="flex flex-col  gap-3">
                          <div className="flex flex-wrap gap-3">
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
                                  className="w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-2  checked:bg-[#47720f] focus:ring-orange-300"
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
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:max-w-xl max-w-sm w-full">
                      {measurement && (
                        <div className="relative mx-2">
                          <RxCross2
                            className="absolute md:top-2 top-1 right-2 bg-[#75934e] bg-opacity-60 text-white hover:text-rose-500 cursor-pointer text-2xl p-1 rounded-md shadow-md transition-all duration-300"
                            onClick={() => setMeasurement(false)}
                          />

                          <img
                            className="w-full h-full"
                            src="https://res.cloudinary.com/dezmmga9k/image/upload/v1705558358/Chomotkar/measurementImg/measurement_n3jmmq.jpg"
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setMeasurement(true)}
                      className="font-g-mono mt-4 btn-measurement">
                      View Measurements
                    </button>
                  </div>
                  <div className="mt-5 flex lg:flex-row flex-col justify-start  gap-3">
                    <div className="bg-black rounded-lg flex items-center justify-start w-fit">
                      <span className="text-white px-5 font-semibold">
                        Quantity
                      </span>
                      <input
                        type="number"
                        className="w-16 rounded-e-lg border-slate-400 hover:shadow-lg placeholder:focus:text-[#47720f] focus:border-white focus:ring-[#47720f] "
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                    <button
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
                        handleAddCart(
                          quantity,
                          product?._id,
                          selectedColor,
                          selectedSize
                        );
                        setPayCarts({
                          ...product,
                          quantity: quantity,
                          color: selectedColor,
                          size: selectedSize,
                        });
                        handleToggleModal();
                      }}
                      className="bg-[#75934e] hover:bg-[#47720f] duration-500 justify-center p-1 px-3 gap-3 text-white flex items-center rounded-md text-lg">
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
                          quantity: quantity,
                          color: selectedColor,
                          size: selectedSize,
                        });
                        handleToggleModal();
                      }}
                      className="bg-[#75934e]  hover:bg-[#47720f] duration-500 justify-center p-1 px-3 gap-3 text-white flex items-center rounded-md text-lg">
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
      <section>
        <RelatedProduct />
      </section>
    </div>
  );
};

export default QuickShop;
