import { FaFilter } from "react-icons/fa6";
import CategoryFilter from "./CategoryFilter";
import { RxCross2 } from "react-icons/rx";
import CollectionFilter from "./CollectionFilter";

const Filter = ({ toggleFilters, handleToggleFilters }) => {
  // console.log(toggleFilters);
  return (
    <div className="md:w-[20%] w-64 md:sticky md:top-10 absolute -top-10">
      <div className=" md:block hidden overflow-visible sticky top-14 max-h-[600px] overflow-y-scroll ">
        <button className="text-2xl flex items-center gap-4 font-bold underline underline-offset-4">
          <span className="whitespace-nowrap">FILTER BY</span>
          <FaFilter />
        </button>
        <div className=" md:grid  hidden gap-10 ">
          <CollectionFilter />
          <CategoryFilter />
          {/* <ColorFilter /> */}
        </div>
      </div>
      {/* for small device */}
      {toggleFilters && (
        <div className={`md:hidden block bg-gray-50 p-4`}>
          <button className="text-2xl w-full flex items-center justify-between font-bold underline underline-offset-4">
            <span>FILTER BY</span>
            <RxCross2
              onClick={() => handleToggleFilters(!toggleFilters)}
              className="h-6 w-6 transition-all duration-1000 text-slate-500 hover:text-rose-500"
            />
          </button>
          <div className="grid gap-1 overflow-y-scroll max-h-[550px]">
            <CollectionFilter />
            <CategoryFilter />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
