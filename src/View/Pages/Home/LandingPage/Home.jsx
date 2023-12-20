import Cart from "../../../Shared/Cart/Cart";
import BestSellingProduct from "../Components/BestSellingProduct/BestSellingProduct";
import ConsumerFavor from "../Components/ConsumerFavor";
import Hero from "../Components/Hero/Hero";
import LovedCategories from "../Components/LovedCategories/LovedCategories";
import NewArrivalProducts from "../Components/NewArrivalProducts/NewArrivalProducts";
import PanjabiCollection from "../Components/PanjabiCollection/PanjabiCollection";
import ShopByCategory from "../Components/ShopByCategory/ShopByCategory";
import SubBanner from "../Components/SubBanner/SubBanner";
import WhyUs from "../Components/WhyUs/WhyUs";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <ConsumerFavor />
      <ShopByCategory />
      <LovedCategories />
      <BestSellingProduct />
      <div className="border shadow-xl p-3 fixed z-[100] right-0 top-1/2 transform -translate-y-1/2">
      <Cart />
      </div>
      <NewArrivalProducts />
      <SubBanner />
      <PanjabiCollection />
      <WhyUs />
    </div>
  );
};

export default Home;
