// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import FoodCards from "./FoodCards";
import { ToastContainer, toast } from "react-toastify";

const AllFoodItem = () => {
    const [allFoods, setAllFoods] = useState([]);
    const [searchFoodItems, setSearchFoodItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/allfoods")
            .then(result => {
                setAllFoods(result.data);
                setSearchFoodItems(result.data);
            })
            .catch(err => {
                console.log("Error while retreiving data: ", err);
            })
    }, []);

    

    const handleSearchSubmit = e =>{
        e.preventDefault();
        console.log("Initial SeachrFoodItem: ", searchFoodItems);
        const form = e.target;
        const search = (form.search.value).toLowerCase();
        console.log(search);
        // const match = allFoods.filter(food => food.foodName.toLowerCase() == search);
        // if(match){
        //     console.log(match);
        // }
        const regex = new RegExp(search, 'i');
        const match = allFoods.filter(food => regex.test(food.foodName));
        if(match){
            console.log(match);
            setSearchFoodItems(match);
        }
        if(!match.length){
            toast.warn("No Such Dishes Exist", {position:"top-center"});
            setSearchFoodItems(allFoods);
        }
        
    }

    return (
        <div>
            {/* <h1>All Food Item Page: {allFoods.length}</h1> */}
            {/* Search functionality */}
            <ToastContainer />
            <div className="max-w-xs mx-auto my-8">
                <form onSubmit={handleSearchSubmit}>
                    <div className="join">
                        <input type="text" name="search" className="input input-bordered join-item" placeholder="Food name here..." />
                        <button className="btn btn-neutral join-item">Search</button>
                    </div>
                </form>
            </div>

            {/* Showing cards */}
            <div className="max-w-6xl mx-auto">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        searchFoodItems.map(food => <FoodCards key={food._id} food={food}></FoodCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoodItem;