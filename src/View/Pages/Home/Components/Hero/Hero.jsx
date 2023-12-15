import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowRight } from "react-icons/go";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "./Hero.css";

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
          waitForTransition:Animation,
        }}
        modules={[Pagination, FreeMode, Autoplay]}
        className="mySwiper lg:h-[calc(100vh-85px)] h-96">
      
        <SwiperSlide className="swiper-slide">
          <div className=" px-10 flex gap-8 md:items-start items-center justify-between">
            <div className="absolute flex flex-col md:justify-start justify-center md:items-start items-center md:ml-0 ml-5 text-black z-20 max-w-[700px] w-full md:right-16 right-1/2 top-1/2 md:text-left text-center  transform md:translate-x-0 translate-x-1/2 -translate-y-1/2">
              <p data-aos="fade-up" className="text-mono text-rose-500 text-base">
                DISCOVER YOUR STYLE
              </p>
              <h1
              data-aos="fade-up"
                style={{ lineHeight: "1.5" }}
                className=" mt-6 font-cinzel  font-semibold text-2xl lg:text-5xl md:text-4xl">
                Unleash The Latest Trends With Cohomotkar
              </h1>
              <p data-aos="fade-up" className="text-mono md:text-xl text-base md:my-8 my-4">
                Step into the world of fashion and redefine you wardrobe <br />{" "}
                with our exclusive collection
              </p>
              <button className="btn-dark  flex items-center gap-2">
                <p>SHOP NOW</p> <GoArrowRight />
              </button>
            </div>
            <img src="https://i.ibb.co/sFwQHLd/tricou-joker.png" alt="" />
            <div className="absolute inset-0 bg-black md:hidden block opacity-10 duration-700"></div>
          </div>
        </SwiperSlide>
        {/* swiper 2 */}
        <SwiperSlide className=" relative swiper-slide">
          <img
            className="bg-cover lg:object-fill object-cover h-full w-full"
            src="https://i.ibb.co/Y2J4VqY/enthusiastic-white-girl-fashionable-purple-jacket-dancing-studio.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-white md:hidden block opacity-10 duration-700"></div>

          <div className="absolute flex flex-col md:justify-start justify-center md:items-start items-center md:ml-0 ml-5 text-black z-20 max-w-[700px] w-full md:right-16 right-1/2 top-1/2 md:text-left text-center  transform md:translate-x-0 translate-x-1/2 -translate-y-1/2">
            <p data-aos="fade-up" className="text-mono text-rose-500 text-base">
              DISCOVER YOUR STYLE
            </p>
            <h1
            data-aos="fade-up"
              style={{ lineHeight: "1.5" }}
              className="mt-6 font-cinzel  font-semibold text-2xl lg:text-5xl md:text-4xl">
              Unleash The Latest Trends With Cohomotkar
            </h1>
            <p data-aos="fade-up" className="text-mono md:text-xl text-base md:my-8 my-4">
              Step into the world of fashion and redefine you wardrobe <br />{" "}
              with our exclusive collection
            </p>
            <button className="btn-dark  flex items-center gap-2">
              <p>SHOP NOW</p> <GoArrowRight />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
