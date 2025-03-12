import { createBrowserRouter } from "react-router-dom";

import Home from "../page/home/Home";

import DashboardMain from "../dashboard/DashboardMain";
import { Root } from "../Root/Root";
import { Error } from "../page/error/Error";

import { AllBicyclePage } from "../page/allBicyclePage/bicycle-Card";
import BicycleDetail from "../page/bicycleDetail/BicycleDetail";
import { AboutPage } from "../page/about/about";
import Register from "../components/auth/Register";
import { BicycleController } from "../dashboard/admin/bicycleController";

import { Checkout } from "../payment/Checkout";
import { User } from "../dashboard/user/User";
import DashboardLayout from "../dashboard/dashboardLayout/dLayout";
import ProtectedRoutes from "../private/protector";
import UserOrderDetail from "../dashboard/user/user.order.detail";
import OrderManagement from "../dashboard/admin/bicycle.order";
import { UserManagement } from "../dashboard/admin/user.management";

import Transaction from "../dashboard/admin/admin.transiciton";
import { UserDetail } from "../dashboard/admin/user.mangement.modal";
import CartPage from "../components/catItem/cardItem";
import { UpdateProfile } from "../dashboard/user/updatePrifile";
import Login from './../components/auth/Login';
import { AdminProfile } from "../dashboard/admin/admin.profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login/> },
      { path: "/register", element: <Register /> },
      { path: "/all-Bicycle", element: <AllBicyclePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/cart", element: <CartPage /> },

      {
        path: "/checkout",
        element: (
          <ProtectedRoutes>
            <Checkout />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/detail/:id",
        element: (
          <ProtectedRoutes>
            <BicycleDetail />
          </ProtectedRoutes>
        ),
      },
    ],
  },

  // ✅ Dashboard Routes
  {
    path: "/dashboard",
    element: <DashboardLayout />, 
    children: [
      { path: "", element: <DashboardMain /> }, // Default dashboard route
      
      /* Admin Routes */
      { path: "bicycle-controller", element: <BicycleController /> },
      { path: "orderManagement", element: <OrderManagement /> },
      { path: "UserManagement", element: <UserManagement /> },
      { path: "admin-profile", element: <AdminProfile /> },
      { path: "transactions", element: <Transaction /> },
      { path: "admin-user-detail/:id", element: <UserDetail /> }, 
      
      /* User Routes */
      { path: "user", element: <User /> },
      { path: "user-profile", element: <UpdateProfile /> },
      { path: "userOrder", element: <UserOrderDetail /> },
    ],
  },
]);
