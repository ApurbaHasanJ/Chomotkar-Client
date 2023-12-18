import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

const SubBanner = () => {
  return (
    <section className="md:mt-32 mt-20 my-container">
      <Swiper
        loop={true}
        slidesPerView={1}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: Animation,
        }}
        modules={[FreeMode, Navigation, Autoplay]}>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/nzFRb7y/tp195-389-393-audi-facebookad-01.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/58bLxXg/6572315.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jvF025C/8296573.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SubBanner;
