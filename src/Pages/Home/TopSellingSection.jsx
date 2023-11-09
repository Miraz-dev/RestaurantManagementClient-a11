// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import TopSellingCard from "./TopSellingCard";
import { Link } from "react-router-dom";



const TopSellingSection = () => {
    const [topItems, setTopItems] = useState([]);
    const [looding, setLooding] = useState(false);

    useEffect(()=> {
        // axios.get("https://restaurant-management-server-eta.vercel.app/orders"

        axios.get("https://restaurant-management-server-eta.vercel.app/top-selling-items")
            .then(result => {
                setTopItems(result.data);
            })
            .catch(err => {
                console.log("Error while GET /orders: ", err.data);
            });
        
        setLooding(true);
        
    }, []);

    const data = topItems.map(topItem => <TopSellingCard key={topItem._id} topItem={topItem}></TopSellingCard>);

    return (
        <div>
            <h1 className="text-center text-xl lg:text-3xl mb-6 mt-14 font-bold">Top Selling Foods</h1>
            <div className="max-w-6xl mx-auto">
                { !looding && <div className="min-h-[50vh] flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        data 
                    }
                </div>
            </div>
            <div className="my-14 flex justify-center">
                <Link to={'/allFoodItems'} className="btn btn-neutral">See All</Link>
            </div>
        </div>
    );
};

export default TopSellingSection;