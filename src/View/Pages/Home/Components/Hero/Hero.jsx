import { Swiper, SwiperSlide } from "swiper/react";
// import { GoArrowRight } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "./Hero.css";

const banners = [
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721619/Chomotkar/HeroBanner/Website-electric-banner-1_itbpzd.jpg",
  },
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721620/Chomotkar/HeroBanner/Website-Tshirt-banner-1_wymegx.jpg",
  },
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721619/Chomotkar/HeroBanner/Website-electric-banner-2_olfnp0.jpg",
  },
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721620/Chomotkar/HeroBanner/Website-Tshirt-banner-3_m9jxvc.jpg",
  },
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721621/Chomotkar/HeroBanner/Website-Tshirt-banner-2_n3vcbz.jpg",
  },
];

const Hero = () => {
  return (
    <div className=" border-b shadow-lg">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
          waitForTransition: Animation,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper lg:h-[calc(100vh-123.200px)] md:mt-0 mt-[56px]">
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="swiper-slide ">
            <img className="w-full h-auto" src={banner.img} alt="" />
          </SwiperSlide>
        ))}

        {/* swiper 2 */}
      </Swiper>
    </div>
  );
};

export default Hero;
