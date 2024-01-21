import { createContext, useState } from "react";

export const SideWishlistContext = createContext(null);

const SideWishlistProvider = ({ children }) => {
  const [sideWishlist, setSideWishlist] = useState(false);

  return (
    <SideWishlistContext.Provider value={{ sideWishlist, setSideWishlist }}>
      {children}
    </SideWishlistContext.Provider>
  );
};

export default SideWishlistProvider;
