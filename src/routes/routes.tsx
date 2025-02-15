import { createBrowserRouter } from "react-router-dom";



import Home from "../page/home/Home";
import Login from './../components/auth/Login';

import { Error } from './../page/error/Error';
import Register from './../components/auth/Register';
import { Root } from "../Root/Root";
import { BicycleCard } from "../page/allBicyclePage/bicycle-Card";


export const router=createBrowserRouter([

    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            //home
            {path:'/',
                element:<Home></Home>
            },
            //authentication
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/all-Bicycle',
                element:<BicycleCard></BicycleCard>
            },
            
        ]
    }
])