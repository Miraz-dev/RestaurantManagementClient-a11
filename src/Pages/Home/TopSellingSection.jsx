// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import TopSellingCard from "./TopSellingCard";
import { Link } from "react-router-dom";

const TopSellingSection = () => {
    const [topItems, setTopItems] = useState([]);

    useEffect(()=> {
        // axios.get("https://restaurant-management-server-q6wp4twq3-miraz-farids-projects.vercel.app/orders")
        axios.get("https://restaurant-management-server-q6wp4twq3-miraz-farids-projects.vercel.app/top-selling-items")
            .then(result => {
                setTopItems(result.data);
            })
            .catch(err => {
                console.log("Error while GET /orders: ", err.data);
            })
    }, []);

    return (
        <div>
            <h1 className="text-center text-xl lg:text-3xl mb-6 mt-14 font-bold">Top Selling Foods</h1>
            <div className="max-w-6xl mx-auto">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        topItems.map(topItem => <TopSellingCard key={topItem._id} topItem={topItem}></TopSellingCard>)
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