// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import TopSellingCard from "./TopSellingCard";

const TopSellingSection = () => {
    const [topItems, setTopItems] = useState([]);

    useEffect(()=> {
        // axios.get("http://localhost:5000/orders")
        axios.get("http://localhost:5000/top-selling-items")
            .then(result => {
                setTopItems(result.data);
            })
            .catch(err => {
                console.log("Error while GET /orders: ", err.data);
            })
    }, []);

    return (
        <div>
            <h1 className="text-center">Top Selling Foods: </h1>
            <div className="max-w-6xl mx-auto">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        topItems.map(topItem => <TopSellingCard key={topItem._id} topItem={topItem}></TopSellingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopSellingSection;