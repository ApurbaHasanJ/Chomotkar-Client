import { Link } from "react-router-dom";
import SectionTitle from "../../../../Shared/SectionTitle";

const ShopByCategory = () => {
  return (
    <section className="mt-20 font-cinzel my-container">
      <SectionTitle
        subtitle={"Trending Products"}
        title={"Shop By Categories"}
      />
      {/* categories card */}
      <div className="grid grid-cols-5 gap-5 items-center justify-between mt-10">
        {/* card 1 */}
        <Link to="#">
          <div className=" rounded-full transition-all overflow-hidden">
            <img
              className="w-full scale-100 duration-500 transition-all overflow-hidden hover:scale-110 rounded-full border border-rose-200"
              src="https://i.ibb.co/RS6Kwk7/handsome-young-man-with-curly-hair-sitting-chair-white-wall.jpg"
            />
          </div>
          <p className="text-center text-slate-700 text-sm sm:text-base md:text-xl mt-3 font-semibold">
            Men
          </p>
        </Link>
        {/* card 2 */}
        <Link to="#">
          <div className=" rounded-full transition-all overflow-hidden">
            <img
              className="w-full rounded-full scale-100 duration-500 transition-all overflow-hidden hover:scale-110 border border-rose-200"
              src="https://i.ibb.co/KxHPwHH/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-gla.jpg"
            />
          </div>
          <p className="text-center text-slate-700 text-sm sm:text-base md:text-xl mt-3 font-semibold">
            Women
          </p>
        </Link>
        {/* card 3 */}
        <Link to="#">
          <div className=" rounded-full transition-all overflow-hidden">
            <img
              className="w-full rounded-full scale-100 duration-500 transition-all overflow-hidden hover:scale-110 border border-rose-200"
              src="https://i.ibb.co/nBNPcRd/fashionable-woman-brown-coat-beige-hat-posing.jpg"
            />
          </div>
          <p className="text-center text-slate-700 text-sm sm:text-base md:text-xl mt-3 font-semibold">
            Outfits
          </p>
        </Link>
        {/* card 4 */}
        <Link to="#">
          <div className=" rounded-full transition-all overflow-hidden">
            <img
              className="w-full rounded-full scale-100 duration-500 transition-all overflow-hidden hover:scale-110 border border-rose-200"
              src="https://i.ibb.co/xjzq5wG/child-wearing-jeans-white-sneakers.jpg"
            />
          </div>
          <p className="text-center text-slate-700 text-sm sm:text-base md:text-xl mt-3 font-semibold">
            Shoe
          </p>
        </Link>
        {/* Card 5 */}
        <Link to="#">
          <div className=" rounded-full transition-all overflow-hidden">
            <img
              className="w-full rounded-full scale-100 duration-500 transition-all overflow-hidden hover:scale-110 border border-rose-200"
              src="https://i.ibb.co/BVcNqLW/portrait-handsome-confident-stylish-hipster-lambersexual-model.jpg"
            />
          </div>
          <p className="text-center text-slate-700 text-sm sm:text-base md:text-xl mt-3 font-semibold">
            Glasses
          </p>
        </Link>
      </div>

      {/* seasonal cards */}
      <div className="font-mono md:grid grid-cols-2 gap-6 mt-28">
        <div className="bg-[#63cdda]  w-full ml-auto relative flex justify-end rounded-md md:py-12 py-8 md:px-6 px-4">
          {/* texts */}
          <div className="z-10 text-end ">
            <div className="">
              <p className="font-medium text-base">SEASONAL STYLE SENSATIONS</p>
              <h3 className="font-cinzel md:text-3xl text-2xl font-semibold md:my-6 my-4 leading-normal">
                Discover The Latest <br />
                In Fashion
              </h3>
              <p className="text-white font-medium text-base">
              Unleash your inner fashionista <br /> with Chomotkar.
              </p>
            </div>
            <button className="text-white font-medium md:mt-10 mt-6 border-b-2 border-white hover:border-rose-400 transition-all duration-500">
              VIEW MORE
            </button>
          </div>
          {/* photo */}
          <img
            className="md:h-[400px] h-80 drop-shadow-2xl absolute bottom-0 left-0 "
            src="https://i.ibb.co/znn9W1y/portrait-handsome-fashion-stylish-businessman-model-dressed-elegant-light-pink-suit-posing-metrosexu.png"
            alt=""
          />
        </div>
        {/* cart 2 */}
        <div className="bg-[#63cdda] transition-all md:mt-0 mt-16 overflow w-full ml-auto relative flex justify-end rounded-md md:py-12 py-8 md:px-6 px-4">
          {/* texts */}
          <div className="z-10 text-end ">
            <div className="">
              <p className="font-medium text-base">SEASONAL STYLE SENSATIONS</p>
              <h3 className="font-cinzel md:text-3xl text-2xl font-semibold md:my-6 my-4 leading-normal">
                Unwrap The Hottest <br /> Trends Of The Yea
              </h3>
              <p className="text-white font-medium text-base">
                Get ready for a wardrobe makeover <br /> like no other.
              </p>
            </div>
            <button className="text-white font-medium md:mt-10 mt-6 border-b-2 border-white hover:border-rose-400 transition-all duration-500">
              VIEW MORE
            </button>
          </div>
          {/* photo */}
          <img
            className="md:h-[400px] h-80  drop-shadow-2xl absolute bottom-0 left-0 "
            src="https://i.ibb.co/NTMXXd7/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolat.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default ShopByCategory;
