import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./View/Providers/AuthProvider";
import { router } from "./View/Routes/GeneralRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ColorProvider from "./View/Providers/ColorProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ColorProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
