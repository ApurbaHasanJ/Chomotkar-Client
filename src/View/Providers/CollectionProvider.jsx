import { createContext, useState } from "react";

export const CollectionContext = createContext(null);

const CollectionProvider = ({ children }) => {
  const [collection, setCollection] = useState("");

  const handleSelectCollection = (category) => {
    setCollection(category);
  };

  return (
    <CollectionContext.Provider value={{ collection, handleSelectCollection }}>
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
