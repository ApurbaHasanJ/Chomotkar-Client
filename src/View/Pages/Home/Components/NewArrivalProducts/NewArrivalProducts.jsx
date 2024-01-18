import SectionTitle from "../../../../Shared/SectionTitle";

import "./NewArrivalProducts.css";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import useProducts from "../../../../Hooks/useProducts";
import ProductCard from "../../../../Shared/ProductCard/ProductCard";

const NewArrivalProducts = () => {
  const [products] = useProducts();
  const newProducts = products.slice(0, 10);

  return (
    <section className="md:mt-32 mt-20 my-container">
      <SectionTitle title={"New Arrivals"} subtitle={"Our New Collection"} />
      <div>
        <Swiper
          navigation={true}
          loop={true}
          slidesPerView={2}
          spaceBetween={8}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
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
          {newProducts &&
            newProducts.map((product, index) => (
              <SwiperSlide key={index} className="">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivalProducts;
