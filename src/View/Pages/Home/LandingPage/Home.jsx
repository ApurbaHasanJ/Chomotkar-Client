import ConsumerFavor from "../Components/ConsumerFavor";
import Hero from "../Components/Hero/Hero";
import LovedCategories from "../Components/LovedCategories/LovedCategories";
import ShopByCategory from "../Components/ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <ConsumerFavor/>
      <LovedCategories/>
      <ShopByCategory />
      
    </div>
  );
};

export default Home;
