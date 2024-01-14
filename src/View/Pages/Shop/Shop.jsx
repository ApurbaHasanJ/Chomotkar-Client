import { useEffect } from "react";
import Filter from "./Components/FilterBy/Filter";
import Products from "./Components/Products";
// import ShopHero from "./Components/ShopHero";

const Shop = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <main>
      {/* <ShopHero /> */}
      <div className="flex md:gap-4 md:mt-32 mt-20 my-container relative overflow-visible">
        <Filter />
        <Products />
      </div>
    </main>
  );
};

export default Shop;
