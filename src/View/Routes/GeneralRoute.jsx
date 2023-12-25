import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/LandingPage/Home";
import Shop from "../Pages/Shop/Shop";
import SignUp from "../Pages/Register/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AdminHome from "../Pages/Dashboard/AdminPages/AdminHome";
import AddProducts from "../Pages/Dashboard/AdminPages/AddProducts";
import ManageProducts from "../Pages/Dashboard/AdminPages/ManageProducts";
import ManageUsers from "../Pages/Dashboard/AdminPages/ManageUsers";
import ErrorPage from "../Pages/Error/ErrorPage";
import Wishlist from "../Pages/Wishlist/Wishlist";
import QuickShop from "../Shared/UploadCloudinary/QuickShop/QuickShop";
import UserHome from "../Pages/Dashboard/UserPages/UserHome";
import PaymentHistory from "../Pages/Dashboard/UserPages/PaymentHistory";
import AddReview from "../Shared/DashNavItems/AddReview";
import MyCart from "../Shared/DashNavItems/MyCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collection/:route",
        element: <Shop />,
      },
      {
        path: "quick-shop/:id",
        element: <QuickShop />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "add-products",
        element: <AddProducts />,
      },
      {
        path: "manage-products/",
        element: <ManageProducts />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      // user board
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      // {
      //   path: "my-carts",
      //   element: <MyCart />,
      // },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);
