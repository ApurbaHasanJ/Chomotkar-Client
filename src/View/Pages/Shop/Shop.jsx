import Filter from "./Components/FilterBy/Filter";
import Products from "./Components/Products";
import ShopHero from "./Components/ShopHero";

const Shop = () => {
  return (
    <main>
      <ShopHero />
      <div className="flex gap-4 md:mt-32 mt-20 my-container">
        <Filter />
        <Products />
      </div>
    </main>
  );
};

export default Shop;
