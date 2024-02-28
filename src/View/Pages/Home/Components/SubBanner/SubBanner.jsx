import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
const SubBanner = () => {
  // Define an array of objects containing image URLs and blur hash values
  const banners = [
    {
      url: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721690/Chomotkar/SubBanner/Small-Website-electric-banner-2_wadylk.jpg",
      blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    },
    {
      url: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721690/Chomotkar/SubBanner/Small-Website-electric-banner-3_amr0q4.jpg",
      blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
    },
    {
      url: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721688/Chomotkar/SubBanner/Small-Website-electric-banner-4_xagye7.jpg",
      blurhash: "L6G@[y%2Tw=w]~RBVZRi};RPxuwH",
    },
    {
      url: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704721687/Chomotkar/SubBanner/Small-Website-Tshirt-banner-1_arl7mu.jpg",
      blurhash: "LGF5]%2Tw=w}7nWBofsmj[ofWrxu",
    },
  ];

  return (
    <section className="md:mt-32 mt-20 my-container">
      <Swiper
        loop={true}
        slidesPerView={1}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        modules={[FreeMode, Navigation, Autoplay]}>
        {/* Map through the array of banners */}
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner.url}
              className="w-full h-auto"
              alt="sub banner"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SubBanner;
