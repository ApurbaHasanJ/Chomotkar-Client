import { Link } from "react-router-dom";
import SectionTitle from "../../../../Shared/SectionTitle";

const LovedCategories = () => {
  return (
    <section className="my-container md:mt-32 mt-20 font-cinzel">
      <SectionTitle
        title={"MOST LOVED CATEGORIES"}
        subtitle={"Our Exclusive Collection"}
      />
      <div className="font-cinzel mt-10 grid md:grid-cols-4 grid-cols-2 gap-3  ">
        {/* Card 1 */}
        <div className="relative h-full object-cover overflow-hidden row-span-2">
          <Link to="/new">
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://i.ibb.co/7z73qPd/young-man-sitting-small-stool-against-white-wall.jpg"
              alt="New Arrival"
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-black px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              New Arrival
            </span>
          </Link>
        </div>
        {/* card 2 */}
        <div className="relative h-full object-cover overflow-hidden">
          <Link to="/">
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://i.ibb.co/TPxPMkK/young-indian-man-traditional-wearing-showing-ok-sign-white-wall.jpg"
              alt="Panjabi"
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-black px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Luxury Panjabi
            </span>
          </Link>
        </div>
        {/* card 3 */}
        <div className="relative h-full object-cover overflow-hidden">
          <Link to="/">
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://i.ibb.co/dpRWWpd/stylish-casual-indian-man-wear-blue-tshirt-posing-against-grey-wall.jpg"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-black px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              T-Shirt
            </span>
          </Link>
        </div>
        {/* card 4 */}
        <div className="relative h-full object-cover overflow-hidden">
          <Link to="/">
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://i.ibb.co/L9X3z6G/front-view-male-courier-green-uniform-cape-holding-delivery-coffee-cup-smiling-pink-background-unifo.jpg"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-black px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Polo Shirt
            </span>
          </Link>
        </div>
        {/* card 5 */}
        <div className="relative h-full object-cover overflow-hidden">
          <Link to="/">
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://i.ibb.co/TPxPMkK/young-indian-man-traditional-wearing-showing-ok-sign-white-wall.jpg"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-black px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Joggers
            </span>
          </Link>
        </div>
        {/* card 6 */}
        <div className="relative h-full object-cover overflow-hidden">
          <Link to="/">
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://i.ibb.co/ngNpJks/young-indian-woman-wearing-sari.jpg"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-black px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Sari
            </span>
          </Link>
        </div>
        {/* card 7 */}
        <div className="relative h-full object-cover overflow-hidden">
          <Link to="/">
            <img
              className="h-full object-cover scale-100 duration-500 transition-all overflow-hidden hover:scale-110"
              src="https://i.ibb.co/TPxPMkK/young-indian-man-traditional-wearing-showing-ok-sign-white-wall.jpg"
              alt=""
            />
            <span className="whitespace-nowrap drop-shadow-2xl bg-black px-3 bg-opacity-25 absolute bottom-3 right-1/2 transform translate-x-1/2 text-white font-semibold lg:text-xl md:text-base text-sm">
              Three Pieces
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LovedCategories;
