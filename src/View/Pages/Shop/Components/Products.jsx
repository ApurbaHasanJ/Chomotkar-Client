import useProducts from "../../../Hooks/useProducts";
import SectionTitle from "../../../Shared/SectionTitle";

// swiper js
import "swiper/css";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import { useContext, useState } from "react";
import { ColorContext } from "../../../Providers/ColorProvider";
import { CategoryContext } from "../../../Providers/CategoryProvider";
import { FaFilter } from "react-icons/fa6";
import Filter from "./FilterBy/Filter";
import { CollectionContext } from "../../../Providers/CollectionProvider";

const Products = () => {
  const [products] = useProducts();
  // takes params:-------------
  const params = useParams().route;

  const [toggleFilters, setToggleFilters] = useState(false);
  // take color context-------------------
  const { selectedColor } = useContext(ColorContext);

  // take category context-------------------
  const { selectedCategory } = useContext(CategoryContext);
  console.log(products);

  // take collection context
  const { collection } = useContext(CollectionContext);

  // total filter
  const filteredProducts = products.filter((product) => {
    const collectionMatch = !collection || product?.category === collection;
    const colorMatch = !selectedColor || product.color === selectedColor;
    const categoryMatch =
      !selectedCategory || product.subCategory === selectedCategory;
    return collectionMatch && colorMatch && categoryMatch;
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
          className="text-lg flex hover:text-rose-500 items-center gap-4 font-bold underline underline-offset-4">
          <span>FILTER</span>
          <FaFilter />
        </button>
        <div className="fixed top-[96px] left-0 z-50">
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
          <p>No products available for the selected criteria.</p>
        </div>
      )}
    </section>
  );
};

export default Products;
