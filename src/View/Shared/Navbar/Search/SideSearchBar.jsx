import { useState } from "react";
import useProducts from "../../../Hooks/useProducts";
import { RxCross2 } from "react-icons/rx";
import SearchResult from "./searchResult";
import { Link } from "react-router-dom";

const SideSearchBar = ({ handleSideSearchBar }) => {
  const [query, setQuery] = useState("");
  const [products, ,] = useProducts();

  const filteredProducts = products.filter((item) => {
    return query.toLocaleLowerCase() === ""
      ? ""
      : item?.title?.toLocaleLowerCase().includes(query);
  });
  return (
    <div className="relative">
      <div className="flex justify-between mt-5">
        <p className="font-mono ps-4 text-gray-400 text-sm">
          What are you looking for?
        </p>
        <RxCross2
          onClick={() => handleSideSearchBar()}
          className="h-6 w-6 transition-all duration-1000 text-gray-400 hover:text-rose-500"
        />
      </div>
      <form className="mb-4 ">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-white sr-only dark:text-gray-900">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none">
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
            type="text"
            id="search"
            className="block w-full p-4  text-2xl placeholder:text-slate-900 placeholder:text-2xl text-slate-900 focus:lowercase border-x-0 border-t-0 placeholder:focus:text-slate-900  focus:border-slate-500 focus:border-b  focus:ring-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>

      <div className="absolute top-[100px] z-[100000] bg-white w-[350px]  overflow-y-auto min-h-[600px] h-full max-h-[390px]">
        <div className="w-full">
          {filteredProducts.map((product) => (
            <Link
              to={`/quick-shop/${product?._id}`}
              key={product.id}
              onClick={() => {
                setQuery(""), handleSideSearchBar();
              }}
              className="flex gap-3 border p-2 h-auto hover:bg-gray-100 duration-500 w-full">
              <SearchResult product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideSearchBar;
