import { Link } from "react-router-dom";
import SectionTitle from "../../../../Shared/SectionTitle";
import { useContext } from "react";
import { CollectionContext } from "../../../../Providers/CollectionProvider";
import { CategoryContext } from "../../../../Providers/CategoryProvider";

const Gallery = () => {
  const { handleSelectCollection } = useContext(CollectionContext);
  // take category context
  const { updateCategory } = useContext(CategoryContext);
  return (
    <section className="my-container md:mt-32 mt-20 font-exo">
      <SectionTitle title={"Follow Us"} subtitle={"Our Gallery"} />
      <div className="font-exo mt-10 grid md:grid-cols-4 grid-cols-2 gap-3  ">
        {/* Card 1 */}
        <div className="relative h-full object-cover border border-[#517521]  overflow-hidden row-span-2">
          <Link
            to="/collection/men"
            onClick={() => {
              handleSelectCollection("men"), updateCategory("");
            }}>
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://res.cloudinary.com/dezmmga9k/image/upload/v1704819019/Chomotkar/OurGallery/new_u9ll6u.jpg"
              alt="New Arrival"
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-[#517521] px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              New Arrival
            </span>
          </Link>
        </div>
        {/* card 2 */}
        <div className="relative h-full object-cover border border-[#517521]  overflow-hidden">
          <Link
            to="/collection/gadgets"
            onClick={() => {
              handleSelectCollection("gadgets"), updateCategory("audio");
            }}>
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://res.cloudinary.com/dezmmga9k/image/upload/v1704819845/Chomotkar/OurGallery/Screenshot_2024-01-09_225949_ywgtra.png"
              alt="Headphone"
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-[#517521] px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Headphone
            </span>
          </Link>
        </div>
        {/* card 3 */}
        <div className="relative h-full object-cover border border-[#517521]  overflow-hidden">
          <Link
            to="/collection/men"
            onClick={() => {
              handleSelectCollection("men"), updateCategory("t-shirt");
            }}>
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://res.cloudinary.com/dezmmga9k/image/upload/v1704819010/Chomotkar/OurGallery/shirt_ixyqka.jpg"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-[#517521] px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              T-Shirt
            </span>
          </Link>
        </div>
        {/* card 4 */}
        <div className="relative h-full object-cover border border-[#517521]  overflow-hidden">
          <Link
            to="/collection/men"
            onClick={() => {
              handleSelectCollection("men"), updateCategory("polo shirt");
            }}>
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://res.cloudinary.com/dezmmga9k/image/upload/v1704819014/Chomotkar/OurGallery/polo_vpsq0q.jpg"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-[#517521] px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Polo
            </span>
          </Link>
        </div>
        {/* card 5 */}
        <div className="relative h-full object-cover border border-[#517521]  overflow-hidden">
          <Link
            to="/collection/women"
            onClick={() => {
              handleSelectCollection("women"), updateCategory("sari");
            }}>
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://res.cloudinary.com/dezmmga9k/image/upload/v1704820442/Chomotkar/OurGallery/medium-shot-woman-holding-smartphone_1_ogalqx.jpg"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-[#517521] px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Sari
            </span>
          </Link>
        </div>
        {/* card 6 */}
        <div className="relative h-full object-cover border border-[#517521]  overflow-hidden">
          <Link
            to="/collection/women"
            onClick={() => {
              handleSelectCollection("women"), updateCategory("sari");
            }}>
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://i.ibb.co/ngNpJks/young-indian-woman-wearing-sari.jpg"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-[#517521] px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Sari
            </span>
          </Link>
        </div>
        {/* card 7 */}
        <div className="relative h-full object-cover border border-[#517521]  overflow-hidden">
          <Link
            to="/collection/men"
            onClick={() => {
              handleSelectCollection("men"), updateCategory("polo");
            }}>
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://res.cloudinary.com/dezmmga9k/image/upload/v1704820759/Chomotkar/OurGallery/Screenshot_2024-01-09_231801_dnkhj7.png"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-[#517521] px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Polo
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
