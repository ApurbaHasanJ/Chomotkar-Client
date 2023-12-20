import useProducts from "../../../Hooks/useProducts";
import SectionTitle from "../../../Shared/SectionTitle";

// swiper js
import "swiper/css";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import { useContext } from "react";
import { ColorContext } from "../../../Providers/ColorProvider";
import { CategoryContext } from "../../../Providers/CategoryProvider";

const Products = () => {
  const [products] = useProducts();
  // take color context-------------------
  const { selectedColor } = useContext(ColorContext);

  // take category context-------------------
  const { selectedCategory } = useContext(CategoryContext);
  console.log(products);

  // // category filter
  // const categoryFilter = selectedCategory
  //   ? products.filter((product) => product.subCategory === selectedCategory)
  //   : products;

  // // color filter
  // const colorFilter = selectedColor
  //   ? products.filter((product) => product.color === selectedColor)
  //   : products;

  // // total filter
  // const filteredProducts = colorFilter
  //   ? categoryFilter.filter((product) => product.color === selectedColor)
  //   : categoryFilter;

  // total filter
  const filteredProducts = products.filter((product) => {
    const colorMatch = !selectedColor || product.color === selectedColor;
    const categoryMatch =
      !selectedCategory || product.subCategory === selectedCategory;
    return colorMatch && categoryMatch;
  });

  console.log(filteredProducts);

  // takes params
  const params = useParams().route;

  // console.log(params);

  return (
    <section className="w-9/12">
      <SectionTitle
        title={`BEST ${params} PRODUCTS`}
        subtitle={"Top Picks For Fashion-Forward Shoppers"}
      />
      {filteredProducts.length > 0 ? (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-3 gap-y-12 mt-10 ">
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
