import useProducts from "../../../Hooks/useProducts";
import SectionTitle from "../../../Shared/SectionTitle";

// swiper js
import "swiper/css";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../../Providers/CategoryProvider";
import { FaFilter } from "react-icons/fa6";
import Filter from "./FilterBy/Filter";
import { CollectionContext } from "../../../Providers/CollectionProvider";

const Products = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const [products] = useProducts();
  // takes params:-------------
  const params = useParams().route;

  const [toggleFilters, setToggleFilters] = useState(false);

  // take category context-------------------
  const { selectedCategory } = useContext(CategoryContext);
  console.log(products);

  // take selectedCollection context
  const { selectedCollection } = useContext(CollectionContext);

  // total filter
  const filteredProducts = products.filter((product) => {
    const collectionMatch =
      !selectedCollection || product?.category === selectedCollection;
    // const colorMatch = !selectedColor || product.color === selectedColor;
    const categoryMatch =
      !selectedCategory || product.subCategory === selectedCategory;
    return collectionMatch && categoryMatch;
  });

  console.log(filteredProducts);

  // console.log(params);

  // toggle filter sidebar
  const handleToggleFilter = () => {
    setToggleFilters(!toggleFilters);
  };

  return (
    <section className="md:w-[80%] ml-auto">
      <SectionTitle
        title={`BEST ${params} PRODUCTS`}
        subtitle={"Welcome to our shop!"}
      />
      {/* filter button */}
      <div className="block md:hidden mt-8">
        <button
          onClick={handleToggleFilter}
          className="text-lg border p-2 px-3 border-black bg-black text-white hover:text-black transition-colors duration-1000 hover:bg-white flex items-center gap-4 font-bold underline underline-offset-4">
          <span>FILTER</span>
          <FaFilter />
        </button>
        <div
          className={`fixed top-[96px] ${
            toggleFilters ? "left-0" : "-left-[1000px]"
          } transition-all duration-700 z-50`}>
          <Filter
            toggleFilters={toggleFilters}
            handleToggleFilters={handleToggleFilter}
          />
        </div>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-3 gap-y-12 mt-10 ">
          {filteredProducts.map((product) => (
            <div key={product?._id} className="">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center md:text-xl text-base shadow-xl bg-rose-100 py-5 mt-28">
          <p>
            No products are available for the selected criteria. Please change
            the route at the top.
          </p>
        </div>
      )}
    </section>
  );
};

export default Products;
