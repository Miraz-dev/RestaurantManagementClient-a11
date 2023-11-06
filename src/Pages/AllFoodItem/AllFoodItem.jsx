// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import FoodCards from "./FoodCards";

const AllFoodItem = () => {
    const [allFoods, setAllFoods] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/allfoods")
            .then(result => {
                setAllFoods(result.data);
            })
            .catch(err => {
                console.log("Error while retreiving data: ", err);
            })
    }, []);

    return (
        <div>
            <h1>All Food Item Page: {allFoods.length}</h1>
            {/* Search functionality */}
            <div className="max-w-xs mx-auto mb-8">
                <div className="join">
                    <input className="input input-bordered join-item" placeholder="Email" />
                    <button className="btn btn-neutral join-item">Search</button>
                </div>
            </div>

            {/* Showing cards */}
            <div className="max-w-6xl mx-auto">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        allFoods.map(food => <FoodCards key={food._id} food={food}></FoodCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoodItem;