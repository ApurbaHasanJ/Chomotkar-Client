import SectionTitle from "../../../../Shared/SectionTitle";

import "./BestSellingProduct.css";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import useProducts from "../../../../Hooks/useProducts";
import ProductCard from "../../../../Shared/ProductCard/ProductCard";

const BestSellingProduct = () => {
  const [products] = useProducts();
  console.log(products);

  return (
    <section className="md:mt-32 mt-20 my-container">
      <SectionTitle
        title={"BEST SELLING PRODUCTS"}
        subtitle={"Top Picks For Fashion-Forward Shoppers"}
      />
      <div>
        <Swiper
          navigation={true}
          loop={true}
          slidesPerView={2}
          spaceBetween={15}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            waitForTransition: Animation,
          }}
          freeMode={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className="grid grid-cols-4 mt-10">
          {products &&
            products.map((product, index) => (
              <SwiperSlide key={index} className="">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingProduct;
