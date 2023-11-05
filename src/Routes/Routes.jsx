import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFoodItem from "../Pages/AddFoodItem/AddFoodItem";

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
                element: <AddFoodItem></AddFoodItem>
            },
            {
                path: "/myAddedFoodItem"
            },
            {
                path: "/myOrders"
            },
            {
                path: "/allFoodItems"
            },
            {
                path: "/blog"
            }
        ]
    }
]);


export default router;