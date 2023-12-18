import BestSellingProduct from "../Components/BestSellingProduct/BestSellingProduct";
import ConsumerFavor from "../Components/ConsumerFavor";
import Hero from "../Components/Hero/Hero";
import LovedCategories from "../Components/LovedCategories/LovedCategories";
import NewArrivalProducts from "../Components/NewArrivalProducts/NewArrivalProducts";
import PanjabiCollection from "../Components/PanjabiCollection/PanjabiCollection";
import ShopByCategory from "../Components/ShopByCategory/ShopByCategory";
import SubBanner from "../Components/SubBanner/SubBanner";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <ConsumerFavor />
      <ShopByCategory />
      <LovedCategories />
      <BestSellingProduct />
      <NewArrivalProducts />
      <SubBanner />
      <PanjabiCollection />
    </div>
  );
};

export default Home;
