import { useEffect } from "react";
import Filter from "./Components/FilterBy/Filter";
import Products from "./Components/Products";
import { Helmet } from "react-helmet-async";
// import ShopHero from "./Components/ShopHero";

const Shop = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Disable scroll restoration when navigating away from this component
    const handleScrollRestoration = () => {
      window.history.scrollRestoration = "manual";
    };

    // Add event listener for scroll restoration
    window.addEventListener("beforeunload", handleScrollRestoration);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleScrollRestoration);
    };
  }, []);

  return (
    <main>
      {/* <ShopHero /> */}
      <Helmet>
        <title>Chomotkar | Collection</title>
      </Helmet>
      <div className="flex md:gap-4 md:mt-32 my-20 my-container relative overflow-visible">
        <Filter />
        <Products />
      </div>
    </main>
  );
};

export default Shop;
