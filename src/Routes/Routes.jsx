import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";
import MyAddedFoodItem from "../Pages/MyAddedFoodItem/MyAddedFoodItem";
import PrivateRoutes from "./PrivateRoutes";
import UpdateFood from "../Pages/UpdateFood/UpdateFood";
import AllFoodItem from "../Pages/AllFoodItem/AllFoodItem";
import FoodDetails from "../Pages/FoodDetailPage/FoodDetails";
import Purchase from "../Pages/Purchase/Purchase";
import MyOrders from "../Pages/MyOrders/MyOrders";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Searchpage from "../Pages/SearchPage.jsx/Searchpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/addFoodItem",
                element: <PrivateRoutes><AddFoodItem></AddFoodItem></PrivateRoutes>
            },
            {
                path: "/myAddedFoodItem",
                element: <MyAddedFoodItem />
            },
            {
                path: "/updateFood/:id",
                element: <UpdateFood></UpdateFood>,
                loader: ({params}) => fetch(`https://restaurant-management-server-eta.vercel.app/foods/${params.id}`)
            },
            {
                path: "/myOrders",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/allFoodItems",
                element: <AllFoodItem></AllFoodItem>
            },
            {
                path: "/details/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`https://restaurant-management-server-eta.vercel.app/foods/${params.id}`)
            },
            {
                path: "/order/:id",
                element: <PrivateRoutes><Purchase></Purchase></PrivateRoutes>,
                loader: ({params}) => fetch(`https://restaurant-management-server-eta.vercel.app/foods/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/searchResult",
                element: <Searchpage></Searchpage>
            }
        ]
    }
]);


export default router;