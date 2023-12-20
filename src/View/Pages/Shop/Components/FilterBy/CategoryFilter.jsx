import { useContext} from "react";
import useProducts from "../../../../Hooks/useProducts";
import { CategoryContext } from "../../../../Providers/CategoryProvider";

const CategoryFilter = () => {
  const [products] = useProducts();
const {selectedCategory, updateCategory}= useContext(CategoryContext)

  //   how many items of each color
  const categoryCounts = products.reduce((acc, product) => {
    if (product?.subCategory) {
      acc[product.subCategory] = (acc[product.subCategory] || 0) + 1;
    }
    return acc;
  }, {});
  //   console.log(categoryCounts);

  //    how many categories
  const categories = Array.from(
    new Set(products.map((product) => product.subCategory))
  );

  const handleSelectCategory = (category) => {
    updateCategory(selectedCategory=== category ? null : category);
  };

  return (
    <div className="mt-5 pb-5 border-b-2">
      <h2 className="font-semibold text-xl border-b-2 capitalize font-mono text-slate-600">
        Category
      </h2>

      <div className="mt-5">
        {categories.map((category, index) => (
          <ul key={index}>
            <li className="flex items-center gap-3 font-medium hover:bg-slate-200 duration-500 py-1 pl-1 hover:ml-1">
              <input
                checked={selectedCategory === category}
                onChange={() => handleSelectCategory(category)}
                type="checkbox"
                name={category}
                id={category}
              />

              <span className="capitalize">{category}</span>
              <span>({categoryCounts[category] || 0})</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
