import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./View/Providers/AuthProvider";
import { router } from "./View/Routes/GeneralRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ColorProvider from "./View/Providers/ColorProvider";
import CategoryProvider from "./View/Providers/CategoryProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CategoryProvider>
        <ColorProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ColorProvider>
      </CategoryProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
