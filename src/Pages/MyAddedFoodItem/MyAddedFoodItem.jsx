// import React from 'react';

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import FoodRows from "./FoodRows";

const MyAddedFoodItem = () => {

    const { user } = useContext(AuthContext);
    const [foodItems, setFoodItems] = useState([]);

    const url = `https://restaurant-management-server-q6wp4twq3-miraz-farids-projects.vercel.app/foods?email=${user?.email}`;

    useEffect(() => {
        axios.get(url)
            .then(result => {
                console.log("MyAddedFoodItem: ", result.data);
                setFoodItems(result.data);
            })
            .catch(err => {
                console.log("Error while retriving food data with queries: ", err);
            })

    }, [url]);

    return (
        <div className="overflow-x-auto min-h-screen">
            <table className="table-xs md:table">
                {/* head */}
                <thead>
                    <tr>
                        {/* <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th> */}
                        <th>Food Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        foodItems.map(items => <FoodRows key={items._id} items={items}></FoodRows>)
                    }
                    
                </tbody>
                

            </table>
        </div>
    );
};

export default MyAddedFoodItem;