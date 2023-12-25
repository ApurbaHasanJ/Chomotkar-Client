import { useParams } from "react-router-dom";
import useProducts from "../../../Hooks/useProducts";
import SectionTitle from "../../SectionTitle";
import { useState } from "react";
import { FaBagShopping, FaCartPlus } from "react-icons/fa6";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const QuickShop = () => {
  const params = useParams();
  const [products] = useProducts();
  const [quantity, setQuantity] = useState(1);
  // filter product
  const filterProduct = products.filter(
    (product) => product?._id === params?.id
  );
  const product = filterProduct[0];
  //   set main display image
  const [img, setImg] = useState(product?.photos[0]?.img);

  return (
    <section className="md:pt-12 pt-32  lg:min-h-screen ">
      <SectionTitle title={"Product Spotlight"} subtitle={"---Order Now!---"} />

      <div className="my-container my-20">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="flex md:flex-row flex-col-reverse gap-7 md:w-7/12 w-full">
            <div className="flex flex-col gap-3">
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
                src={img || product?.photos[0]?.img}
                zoomSrc={img || product?.photos[0]?.img}
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
              <div className="mb-6 mt-3 flex gap-3">
                <span className="font-medium text-lg">Price:</span>
                {product?.newPrice ? (
                  <div className="flex flex-col justify-start items-start gap-1">
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
              <div className="my-6 flex items-center gap-2">
                <span className="font-medium text-lg">Color:</span>
                <span
                  style={{ backgroundColor: product?.color }}
                  className="h-5 w-5 rounded-full border-2 border-slate-400"></span>
                <span className="capitalize">({product?.color})</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-medium text-lg">Available Sizes:</span>
                <div className="flex gap-3">
                  {product?.sizes.map((size, index) => (
                    <span
                      key={index}
                      className="border border-slate-300 p-1 px-3">
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5 flex md:flex-row flex-col gap-3">
              <input
                type="number"
                className="w-16 rounded-lg border-slate-400 hover:shadow-lg placeholder:focus:text-rose-400 focus:border-white focus:ring-rose-400 "
                min={1}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button className="bg-[#ff7675] hover:bg-[#f15e5e] duration-500 justify-center p-1 px-3 gap-3 text-white flex items-center rounded-md text-lg">
                <FaCartPlus
                  // onClick={() => {
                  //   setProductId(product?._id);
                  // }}
                  className="text-xl"
                />
                <span>Add To Cart</span>
              </button>
              <button className="bg-[#ff7675]  hover:bg-[#f15e5e] duration-500 justify-center p-1 px-3 gap-3 text-white flex items-center rounded-md text-lg">
                <FaBagShopping
                  // onClick={() => {
                  //   setProductId(product?._id);
                  // }}
                  className="text-xl"
                />
                <span>Buy Now</span>
              </button>
            </div>
            <p className="text-gray-500 mt-6 font-mono">
              {product?.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickShop;
