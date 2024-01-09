import { Link } from "react-router-dom";
import SectionTitle from "../../../../Shared/SectionTitle";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { useContext } from "react";
import { CollectionContext } from "../../../../Providers/CollectionProvider";
import { CategoryContext } from "../../../../Providers/CategoryProvider";

const categories = [
  {
    title: "men",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704809691/Chomotkar/ShopByCategory/men_mhlpig.jpg",
    category: "men",
    subCategory: "",
  },
  {
    title: "women",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704809692/Chomotkar/ShopByCategory/women_fmtlqs.jpg",
    category: "women",
    subCategory: "",
  },
  {
    title: "gadgets",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704808811/Chomotkar/ShopByCategory/modern-stationary-collection-arrangement_orpsab.jpg",
    category: "gadgets",
    subCategory: "",
  },
  {
    title: "combo pack",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704809691/Chomotkar/ShopByCategory/combo_p02au2.jpg",
    category: "women",
    subCategory: "combo pack",
  },
  {
    title: "sari",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704814077/Chomotkar/ShopByCategory/beautiful-young-woman-wearing-sari_mtbwjt.jpg",
    category: "women",
    subCategory: "sari",
  },
  {
    title: "audio",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704815624/Chomotkar/ShopByCategory/black-headphones-digital-device_caf4kq.jpg",
    category: "gadgets",
    subCategory: "audio",
  },
  {
    title: "power bank",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704815619/Chomotkar/ShopByCategory/2210.q803.009.S.m012.c12.mobile_phone_smartphone_charging_composition_tjyvoc.jpg",
    category: "gadgets",
    subCategory: "power bank",
  },
  {
    title: "mobile accessories",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1704815620/Chomotkar/ShopByCategory/top-view-dvd-music-set_cbsi7h.jpg",
    category: "gadgets",
    subCategory: "mobile accessories",
  },
];

const ShopByCategory = () => {
  const { handleSelectCollection } = useContext(CollectionContext);
  // take category context
  const { updateCategory } = useContext(CategoryContext);

  return (
    <section className="mt-20 font-cinzel my-container">
      <SectionTitle
        subtitle={"Trending Products"}
        title={"Shop By Categories"}
      />
      {/* categories card */}
      <div>
        <Swiper
          navigation={true}
          loop={true}
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={{
            200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            waitForTransition: Animation,
          }}
          freeMode={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className="grid sm:grid-cols-5 grid-cols-4 gap-5 items-center justify-between mt-10">
          {categories &&
            categories.map((category, index) => (
              <SwiperSlide key={index} className="">
                <Link
                  to={`collection/${category?.category}`}
                  onClick={() => {
                    handleSelectCollection(category?.category),
                      updateCategory(category?.subCategory);
                  }}>
                  <div className=" rounded-full transition-all overflow-hidden">
                    <img
                      className="w-full scale-100 duration-500 transition-all overflow-hidden hover:scale-110 rounded-full border border-rose-200"
                      src={category?.img}
                    />
                  </div>
                  <p className="text-center text-slate-700 text-[10px] sm:text-base md:text-xl mt-3 font-semibold">
                    {category?.title}
                  </p>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};
export default ShopByCategory;
