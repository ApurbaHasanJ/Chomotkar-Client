import { createContext, useState } from "react";

export const ColorContext = createContext(null);

const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const updateColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <ColorContext.Provider value={{ selectedColor, updateColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
