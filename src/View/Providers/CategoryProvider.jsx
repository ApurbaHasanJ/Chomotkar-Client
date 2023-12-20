import { createContext, useState } from "react";

export const CategoryContext = createContext(null);

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const updateCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, updateCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
