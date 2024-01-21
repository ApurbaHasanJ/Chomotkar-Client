import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./View/Providers/AuthProvider";
import { router } from "./View/Routes/GeneralRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ColorProvider from "./View/Providers/ColorProvider";
import CategoryProvider from "./View/Providers/CategoryProvider";
import { Toaster } from "react-hot-toast";
import WishlistProvider from "./View/Providers/WishlistProvider";
import CollectionProvider from "./View/Providers/CollectionProvider";
import CartProvider from "./View/Providers/CartProvider";
import OrdersHistoryProvider from "./View/Providers/OrdersHistoryProvider";
import { HelmetProvider } from "react-helmet-async";
import SideCartProvider from "./View/Providers/SideCartProvider";
import SideWishlistProvider from "./View/Providers/SideWishListProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <OrdersHistoryProvider>
        <SideWishlistProvider>
          <SideCartProvider>
            <CartProvider>
              <CollectionProvider>
                <CategoryProvider>
                  <ColorProvider>
                    <AuthProvider>
                      <WishlistProvider>
                        <HelmetProvider>
                          <Toaster position="top-right" reverseOrder={false} />
                          <RouterProvider router={router} />
                        </HelmetProvider>
                      </WishlistProvider>
                    </AuthProvider>
                  </ColorProvider>
                </CategoryProvider>
              </CollectionProvider>
            </CartProvider>
          </SideCartProvider>
        </SideWishlistProvider>
      </OrdersHistoryProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
