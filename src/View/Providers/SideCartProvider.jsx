import { createContext, useState } from "react";

export const SideCartContext = createContext(null);

const SideCartProvider = ({ children }) => {
  const [sideCart, setSideCart] = useState(false);

  return (
    <SideCartContext.Provider value={{ sideCart, setSideCart }}>
      {children}
    </SideCartContext.Provider>
  );
};

export default SideCartProvider;
