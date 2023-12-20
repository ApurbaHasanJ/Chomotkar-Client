import useProducts from "../../../Hooks/useProducts";
import SectionTitle from "../../../Shared/SectionTitle";

// swiper js
import "swiper/css";
import "swiper/css/pagination";
import { useParams } from "react-router-dom";
import ProductCard from "../../../Shared/ProductCard/ProductCard";
import { useContext } from "react";
import { ColorContext } from "../../../Providers/ColorProvider";

const Products = () => {
  const [products] = useProducts();
  const { selectedColor } = useContext(ColorContext);
  console.log(products);

  const filteredProducts = selectedColor
    ? products.filter((product) => product.color === selectedColor)
    : products;

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
      <div className="grid md:grid-cols-3 grid-cols-2 gap-3 mt-10 ">
        {filteredProducts.map((product) => (
          <div key={product?._id} className="">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
