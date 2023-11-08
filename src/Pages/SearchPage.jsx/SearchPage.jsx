// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import FoodCards from "../AllFoodItem/FoodCards";

const Searchpage = () => {
    const {searchFoodItems, setSearchFoodItems} = useContext(AuthContext);

    const searchItemLength = searchFoodItems.length;
    
    return (
        <div className="min-h-screen">
            <h1 className="text-center text-xl lg:text-3xl my-14 font-bold">
                {searchItemLength === 0 ? "No item is found" : `Your Search Result: ${searchItemLength}`}
            </h1>

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

export default Searchpage;