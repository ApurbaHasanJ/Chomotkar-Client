import { useContext } from "react";
import useProducts from "../../../../Hooks/useProducts";
import { CollectionContext } from "../../../../Providers/CollectionProvider";
import { CategoryContext } from "../../../../Providers/CategoryProvider";
const CollectionFilter = () => {
  const [products] = useProducts();
  const { updateCategory } = useContext(CategoryContext);
  const { selectedCollection, handleSelectCollection } =
    useContext(CollectionContext);

  // console.log();
  // console.log(selectedCollection);

  //   how many items of each collection
  const collectionCounts = products.reduce((acc, product) => {
    if (product?.category) {
      acc[product.category] = (acc[product.category] || 0) + 1;
    }
    return acc;
  }, {});
  // console.log(collectionCounts);

  //    how many collections
  const collections = Array.from(
    new Set(products.map((product) => product.category))
  );
  // console.log(collections);

  const handleCollection = (category) => {
    // console.log(category);
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
    handleSelectCollection(selectedCollection === category ? null : category);
  };

  return (
    <div className="mt-5 pb-5 border-b-2">
      <h2 className="font-semibold text-xl border-b-2 capitalize font-mono text-slate-600">
        Collection
      </h2>

      <div className="mt-5">
        {collections.map((collection, index) => (
          <ul key={index}>
            <li className="flex items-center gap-3 font-medium hover:bg-slate-200 duration-500 py-1 pl-1 hover:ml-1">
              <input
                checked={selectedCollection === collection}
                onChange={() => {
                  handleCollection(collection), updateCategory("");
                }}
                type="checkbox"
                className="w-6 h-6 border border-gray-500 rounded bg-gray-50 focus:ring-2  checked:bg-[#47720f] focus:ring-orange-300"
                name={collection}
                id={collection}
              />

              <span className="capitalize">{collection}</span>
              <span>({collectionCounts[collection] || 0})</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CollectionFilter;
