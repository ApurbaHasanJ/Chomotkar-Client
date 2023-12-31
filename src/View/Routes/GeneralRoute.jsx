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
import Wishlist from "../Pages/Dashboard/UserPages/Wishlist";
import QuickShop from "../Shared/UploadCloudinary/QuickShop/QuickShop";
import UserHome from "../Pages/Dashboard/UserPages/UserHome";
import PaymentHistory from "../Pages/Dashboard/UserPages/PaymentHistory";
import AddReview from "../Pages/Dashboard/UserPages/AddReview";
import MyCart from "../Pages/Dashboard/UserPages/MyCart";
import Checkout from "../Pages/Dashboard/UserPages/Checkout";
import ManageCoupon from "../Pages/Dashboard/AdminPages/ManageCoupon";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ManageReviews from "../Pages/Dashboard/AdminPages/ManageReviews";

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
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <AdminRoute>
            <AddProducts />
          </AdminRoute>
        ),
      },
      {
        path: "manage-products",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manage-coupons",
        element: (
          <AdminRoute>
            <ManageCoupon />
          </AdminRoute>
        ),
      },
      {
        path: "manage-reviews",
        element: (
          <AdminRoute>
            <ManageReviews />
          </AdminRoute>
        ),
      },
      // user board
      {
        path: "user-home",
        element: (
          <PrivateRoute>
            <UserHome />
          </PrivateRoute>
        ),
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "my-carts",
        element: <MyCart />,
      },
      {
        path: "checkout/:id",
        element: <Checkout />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
