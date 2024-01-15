import { useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import { Link } from "react-router-dom";
import SearchResult from "./searchResult";

const Search = () => {
  const [query, setQuery] = useState("");
  const [products, ,] = useProducts();

  const filteredProducts = products.filter((item) => {
    return query.toLocaleLowerCase() === ""
      ? ""
      : item?.title?.toLocaleLowerCase().includes(query);
  });

  return (
    <div className="relative">
      <form className="mb-4">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-white sr-only dark:text-gray-900">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400 hover:text-rose-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-14 text-sm  placeholder:text-base text-rose-400 placeholder:focus:text-rose-400 focus:lowercase border-white focus:border-white focus:ring-white f dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>

      <div className="absolute top-[120px] z-[100000] bg-white md:w-[350px]">
        <div className=" w-full">
          {filteredProducts.map((product) => (
            <Link
              to={`/quick-shop/${product?._id}`}
              onClick={() => setQuery("")}
              key={product.id}
              className="flex gap-3 border p-2 hover:bg-gray-100 duration-500 w-full">
              <SearchResult product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
