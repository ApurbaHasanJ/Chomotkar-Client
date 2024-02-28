import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "./Hero.css";

const banners = [
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721619/Chomotkar/HeroBanner/Website-electric-banner-1_itbpzd.jpg",
    blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  },
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721620/Chomotkar/HeroBanner/Website-Tshirt-banner-1_wymegx.jpg",
    blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
  },
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721619/Chomotkar/HeroBanner/Website-electric-banner-2_olfnp0.jpg",
    blurhash: "L6G@[y%2Tw=w]~RBVZRi};RPxuwH",
  },
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721620/Chomotkar/HeroBanner/Website-Tshirt-banner-3_m9jxvc.jpg",
    blurhash: "LGF5]%2Tw=w}7nWBofsmj[ofWrxu",
  },
  {
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721621/Chomotkar/HeroBanner/Website-Tshirt-banner-2_n3vcbz.jpg",
    blurhash: "LGF5]%2Tw=w}7nWBofsmj[ofWrxu",
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
          waitForTransition: true,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper mt-0">
        {banners.map((banner, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img
              src={banner.img}
              className="w-full bg-green-100 h-full"
              alt="Banner"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
