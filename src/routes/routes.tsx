import { createBrowserRouter } from "react-router-dom";


import Home from "../page/home/Home";
import Login from "../components/auth/Login";


import DashboardMain from "../dashboard/DashboardMain";
import { Root } from "../Root/Root";
import { Error } from "../page/error/Error";

import { AllBicyclePage, BicycleCard } from './../page/allBicyclePage/bicycle-Card';


// import { User } from "../dashboard/user/User";

import BicycleDetail from "../page/bicycleDetail/BicycleDetail";
import { AboutPage } from './../page/about/about';
import Register from "../components/auth/Register";
import { BicycleController } from "../dashboard/admin/bicycleController";

import { Checkout } from './../payment/Checkout';
import { User } from "../dashboard/user/User";
import DashboardLayout from "../dashboard/dashboardLayout/dLayout";
import ProtectedRoutes from "../private/protector";
import UpdateProfile from "../dashboard/user/updatePrifile";
// import UserAllOrder from './../dashboard/user/user.allOrder';
import UserOrderDetail from "../dashboard/user/user.order.detail";
import OrderManagement from "../dashboard/admin/bicycle.order";
import { UserManagement } from "../dashboard/admin/user.management";
import AdminProfile from "../dashboard/admin/admin.profile";
import Transaction from "../dashboard/admin/admin.transiciton";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // ✅ Navbar & Footer থাকবে
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/all-Bicycle", element: <AllBicyclePage /> },
      { path: "/about", element: <AboutPage/> },
      { path: "/checkout", element: 
<ProtectedRoutes><Checkout /></ProtectedRoutes>

       },
      { path: "/detail/:id", element: 
      <ProtectedRoutes> <BicycleDetail /></ProtectedRoutes>
      
      }

    ],
  },

  // ✅ Dashboard Routes (Navbar & Footer ছাড়া)
  {
    path: "/dashboard",
    element: <DashboardLayout />, // ✅ Navbar & Footer নেই
    children: [
      { path: "/dashboard", element:
  
        <DashboardMain />
        
         },


    //  ,
      { path: "/dashboard/bicycle-controller", element: <BicycleController /> },
      // { path: "/dashboard/order", element: <Order /> },
      { path: "/dashboard/orderManagement", element: <OrderManagement/> },
      { path: "/dashboard/UserManagement", element: <UserManagement/> },
      { path: "/dashboard/admin-profile", element: <AdminProfile/> },
      { path: "/dashboard/transactions", element: <Transaction/> },

      /* dashboard user routes */
      { path: "/dashboard/user", element: <User /> },


      { path: "/dashboard/user-profile", element: <UpdateProfile />  },
  
      { path: "/dashboard/userOrderDetail", element: <UserOrderDetail/> },
     
    ],
  },
]);


