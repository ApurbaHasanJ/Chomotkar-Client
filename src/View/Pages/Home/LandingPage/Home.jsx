// import BestSellingProduct from "../Components/BestSellingProduct/BestSellingProduct";
// import ConsumerFavor from "../Components/ConsumerFavor";
import GadgetsCollection from "../Components/GadgetsCollection/GadgetsCollection";
import Gallery from "../Components/Gallery/Gallery";
import Hero from "../Components/Hero/Hero";
import NewArrivalProducts from "../Components/NewArrivalProducts/NewArrivalProducts";
import PoloCollection from "../Components/PoloCollection/PoloCollection";
import SariCollection from "../Components/SariCollection/SariCollection";
import ShopByCategory from "../Components/ShopByCategory/ShopByCategory";
import SubBanner from "../Components/SubBanner/SubBanner";
import TShirtCollection from "../Components/TShirtCollection/TShirtColleciton";
import WhyUs from "../Components/WhyUs/WhyUs";

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      {/* <ConsumerFavor /> */}
      <ShopByCategory />
      {/* <BestSellingProduct /> */}
      <NewArrivalProducts />
      <SubBanner />
      <GadgetsCollection />
      <SariCollection />
      <PoloCollection />
      <TShirtCollection />
      <Gallery />
      <WhyUs />
    </div>
  );
};

export default Home;
