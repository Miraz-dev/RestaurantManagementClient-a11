// import React from 'react';

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyAddedFoodItem = () => {

    const {user} = useContext(AuthContext);
    const [foodItems, setFoodItems] = useState([]);

    const url = `http://localhost:5000/foods?email=${user?.email}`;

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
        <div>
            <h2>Length: {foodItems.length}</h2>
        </div>
    );
};

export default MyAddedFoodItem;