import SectionTitle from "../../../../Shared/SectionTitle";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import useProducts from "../../../../Hooks/useProducts";
import ProductCard from "../../../../Shared/ProductCard/ProductCard";

const SariCollection = () => {
  const [products] = useProducts();

  const panjabiCollection =
    products && products.filter((product) => product.subCategory === "sari");

  return (
    <section className="md:mt-32 mt-20 my-container">
      <SectionTitle
        title={"Best Sari Collection"}
        subtitle={"All Time Favorite"}
      />
      <div>
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
          {panjabiCollection &&
            panjabiCollection.map((product, index) => (
              <SwiperSlide key={index} className="">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SariCollection;
