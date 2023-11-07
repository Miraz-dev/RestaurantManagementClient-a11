// import React from 'react';

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OrdersCard from "./OrdersCard";

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const userEmail = user?.email;

    useEffect(() => {
        axios.get(`http://localhost:5000/orders?email=${userEmail}`)
            .then(result => {
                setOrders(result.data);
            })
            .catch(err => {
                console.log("Error while fetching orders: ", err);
            })
    }, [userEmail]);

    return (
        <div>
            <div className="py-8">
                <h1 className="text-center text-base md:text-2xl font-semibold text-green-500">Your Orders: {orders.length}</h1>
            </div>
            <div className="max-w-2xl mx-auto space-y-6">
                {
                    orders.map(order => <OrdersCard key={order._id} order={order}></OrdersCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;