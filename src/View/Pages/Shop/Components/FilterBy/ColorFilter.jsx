import { useContext } from "react";
import useProducts from "../../../../Hooks/useProducts";
import { ColorContext } from "../../../../Providers/ColorProvider";
const ColorFilter = () => {
  const [products] = useProducts();

  const { selectedColor, updateColor }= useContext(ColorContext)

  //   how many items of each color
  const colorCounts = products.reduce((acc, product) => {
    if (product.color) {
      acc[product.color] = (acc[product.color] || 0) + 1;
    }
    return acc;
  }, {});

  // how many colors
  const colors = Array.from(new Set(products.map((product) => product.color)));
  //   console.log(colors);

  const handleSelectColor = (color) => {
    updateColor(selectedColor === color ? null : color);
  };

  return (
    <div className="mt-5 pb-5 border-b-2">
      <h2 className="font-semibold text-xl border-b-2 capitalize font-mono text-slate-600">
        color
      </h2>

      <div className="mt-5">
        {colors.map((color, index) => (
          <ul key={index}>
            <li className="flex items-center gap-3 font-medium hover:bg-slate-200 duration-500 py-1 pl-1 hover:ml-1">
            <input
                checked={selectedColor === color}
                onChange={() => handleSelectColor(color)}
                type="checkbox"
                name={color}
                id={color}
              />
              <span
                style={{ backgroundColor: color }}
                className="h-4 w-4 rounded-full border"></span>
              <span className="capitalize">{color}</span>
              <span>({colorCounts[color] || 0})</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
