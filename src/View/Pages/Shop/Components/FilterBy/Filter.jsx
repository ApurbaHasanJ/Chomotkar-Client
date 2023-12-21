import { FaFilter } from "react-icons/fa6";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import { RxCross2 } from "react-icons/rx";

const Filter = ({toggleFilters, handleToggleFilters}) => {
  console.log(toggleFilters);
  return (
   <div className="md:w-[20%]">
     <div className=" md:block hidden overflow-visible  sticky top-10 ">
      <button className="text-2xl flex items-center gap-4 font-bold underline underline-offset-4">
        <span className="whitespace-nowrap">FILTER BY</span>
        <FaFilter />
      </button>
      <div className=" md:grid  hidden gap-10 ">
        <CategoryFilter />
        <ColorFilter />
      </div>
    </div>
    {/* for small device */}
    {
      toggleFilters && <div className=" md:hidden block bg-gray-50 p-4">
      <button className="text-2xl flex items-center gap-4 font-bold underline underline-offset-4">
        <span>FILTER BY</span>
        <RxCross2 onClick={()=>handleToggleFilters(!toggleFilters)} className="h-6 w-6 text-slate-500 hover:text-rose-500" />
      </button>
      <div className="grid gap-10 overflow-y-scroll">
        <CategoryFilter />
        <ColorFilter />
      </div>
    </div>
    }
   </div>
  );
};

export default Filter;
