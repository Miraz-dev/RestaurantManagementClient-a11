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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: "/myOrders"
            },
            {
                path: "/allFoodItems",
                element: <AllFoodItem></AllFoodItem>
            },
            {
                path: "/blog"
            }
        ]
    }
]);


export default router;