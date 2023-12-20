import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";

const Filter = () => {
  return (
    <div className="w-3/12">
      <button className="text-2xl font-bold underline underline-offset-4">
        FILTER BY
      </button>
      <div className="grid gap-10">
        <CategoryFilter />
        <ColorFilter />
      </div>
    </div>
  );
};

export default Filter;
