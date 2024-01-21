import { useContext } from "react";
import { CategoryContext } from "../../Providers/CategoryProvider";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import useProducts from "../../Hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../SectionTitle";

const RelatedProduct = () => {
  // take category context-------------------
  const { selectedCategory } = useContext(CategoryContext);
  const [products] = useProducts();

  console.log(selectedCategory);

  // total filter
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.subCategory === selectedCategory;
    return categoryMatch;
  });
  console.log(filteredProducts);
  return (
    <div>
      <SectionTitle title={"Related Products"} subtitle={"---Order Now!---"} />
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={8}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 13,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
          waitForTransition: Animation,
        }}
        freeMode={true}
        modules={[FreeMode, Navigation, Autoplay]}
        className="grid grid-cols-2 md:grid-cols-4 mt-10">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <SwiperSlide key={product?._id} className="">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default RelatedProduct;
