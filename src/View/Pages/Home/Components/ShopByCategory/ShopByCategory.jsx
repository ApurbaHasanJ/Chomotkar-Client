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
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1709117650/Chomotkar/ShopByCategory/men_nnwdvb.jpg",
    category: "men",
    subCategory: "",
    blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  },
  {
    title: "women",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1709117651/Chomotkar/ShopByCategory/women_qcdc2p.jpg",
    category: "women",
    subCategory: "",
    blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
  },
  {
    title: "gadgets",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1709117462/Chomotkar/ShopByCategory/gadgets_zejky6.jpg",
    category: "gadgets",
    subCategory: "",
    blurhash: "LGF5]%2Tw=w}7nWBofsmj[ofWrxu",
  },
  {
    title: "combo pack",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1709117650/Chomotkar/ShopByCategory/combo_s7an2s.jpg",
    category: "women",
    subCategory: "combo pack",
    blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
  },
  {
    title: "sari",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1709117461/Chomotkar/ShopByCategory/bow-sari_ll9ogm.jpg",
    category: "women",
    subCategory: "sari",
    blurhash: "L6G@[y%2Tw=w]~RBVZRi};RPxuwH",
  },
  {
    title: "audio",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1709117131/Chomotkar/ShopByCategory/headphone_ioazf7.jpg",
    category: "gadgets",
    subCategory: "audio",
    blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  },
  {
    title: "power bank",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1709117129/Chomotkar/ShopByCategory/powerbank_d6muuu.jpg",
    category: "gadgets",
    subCategory: "power bank",
    blurhash: "LKO2?U%2Tw=w]~RBVZRi};RPxuwH",
  },
  {
    title: "mobile accessories",
    img: "https://res.cloudinary.com/dezmmga9k/image/upload/v1709117131/Chomotkar/ShopByCategory/earphone_rjdcdx.jpg",
    category: "gadgets",
    subCategory: "mobile accessories",
    blurhash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  },
];

const ShopByCategory = () => {
  const { handleSelectCollection } = useContext(CollectionContext);
  // take category context
  const { updateCategory } = useContext(CategoryContext);

  return (
    <section className="mt-20 font-exo my-container">
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
                  <div className=" rounded-full object-cover transition-all p-[1px] overflow-hidden">
                    <img
                      className={`w-full h-full scale-100 duration-500 transition-all overflow-hidden hover:scale-110 rounded-full border border-[#517521]`}
                      src={category?.img}
                      alt={category?.title}
                      // onLoad={() => setImageLoaded(!imageLoaded)}
                    />
                  </div>
                  <p className="text-center text-slate-700 text-[10px] capitalize sm:text-base md:text-xl mt-3 font-semibold">
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
