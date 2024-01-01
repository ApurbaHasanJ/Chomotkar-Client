import { createContext, useState } from "react";

export const CollectionContext = createContext(null);

const CollectionProvider = ({ children }) => {
  const [selectedCollection, setCollection] = useState("");

  const handleSelectCollection = (category) => {
    setCollection(category);
  };

  return (
    <CollectionContext.Provider value={{ selectedCollection, handleSelectCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
