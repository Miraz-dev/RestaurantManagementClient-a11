// import React from 'react';

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OrdersCard from "./OrdersCard";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

// https://restaurant-management-server-eta.vercel.app/

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const userEmail = user?.email;

    useEffect(() => {
        axios.get(`https://restaurant-management-server-eta.vercel.app/orders?email=${userEmail}`, {withCredentials: true})
            .then(result => {
                setOrders(result.data);
            })
            .catch(err => {
                console.log("Error while fetching orders: ", err);
            })
    }, [userEmail]);


    const handleDelete = id => {
        console.log("From handleDelete: ", id);
        axios.delete(`https://restaurant-management-server-eta.vercel.app/orders/${id}`)
            .then(result => {
                if(result.data.deletedCount > 0){
                    toast.success("Order deleted successfully", {position:"top-center", autoClose:1000});
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            })
            .catch(err => {
                console.log("Error while deleting: ", err);
            })
    }

    return (
        <div className="min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FP || My Orders</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <ToastContainer />
            <div className="py-8">
                <h1 className="text-center text-base md:text-2xl font-semibold text-green-500">Your Orders: {orders.length}</h1>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
                {
                    orders.map(order => <OrdersCard key={order._id} order={order} handleDelete={handleDelete}></OrdersCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;