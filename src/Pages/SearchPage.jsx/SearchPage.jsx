// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import FoodCards from "../AllFoodItem/FoodCards";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const Searchpage = () => {
    const { searchFoodItems, setSearchFoodItems } = useContext(AuthContext);
    const [extraAllFoods, setExtraAllFoods] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://restaurant-management-server-eta.vercel.app/foods")
            .then(result => {
                // setSearchFoodItems(result.data);
                setExtraAllFoods(result.data);
            })
            .catch(err => {
                console.log("Error while retreiving data: ", err);
            });
    }, []);

    const searchItemLength = searchFoodItems.length;

    const handleSearchSubmit = e => {
        e.preventDefault();

        console.log("Initial SeachrFoodItem: ", searchFoodItems);
        const form = e.target;
        const search = (form.search.value).toLowerCase();

        const searchCategory = (form.searchType.value).toLowerCase();
        console.log(search);
        // const match = allFoods.filter(food => food.foodName.toLowerCase() == search);
        // if(match){
        //     console.log(match);
        // }

        if (search === "") {
            return;
        }

        const regex = new RegExp(search, 'i');
        const match = extraAllFoods.filter(food => regex.test(food.foodName));
        // const categoryMatch = extraAllFoods.filter(food => (food.category).toLowerCase() === searchCategory);

        const categoryAndNameMatch = extraAllFoods.filter(food => (food.category).toLowerCase() === searchCategory && regex.test(food.foodName));

        if (!match.length) {
            toast.warn("No Such Dishes Exist", { position: "top-center" });
            setSearchFoodItems([]);
            return;
        }

        if (searchCategory === "all" && match) {
            setSearchFoodItems(match);
            return;
        }

        if(!categoryAndNameMatch.length){
            toast.warn(`No Such Dishes Found in ${searchCategory} category`, { position: "top-center" });
            setSearchFoodItems([]);
            return;
        }

        if (categoryAndNameMatch) {
            setSearchFoodItems(match);
        }


        // if (match) {
        //     console.log(match);
        //     setSearchFoodItems(match);
        //     navigate("/searchResult");
        // }



    }

    return (
        <div className="min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FP || Search</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <ToastContainer />
            <h1 className="text-center text-xl lg:text-3xl my-14 font-bold">
                {searchItemLength === 0 ? "No item is found" : `Search Result: ${searchItemLength}`}
            </h1>

            <div className="my-8">
                <form onSubmit={handleSearchSubmit} className="max-w-lg mx-auto">
                    {/* <div className="join">
                        <input type="text" name="search" className="input input-bordered join-item" placeholder="Food name here..." />
                        <button className="btn btn-neutral join-item">Search</button>
                    </div> */}

                    <div className="join">
                        <div>
                            <div>
                                <input type="text" name="search" className="input input-bordered join-item" placeholder="Food name here..." />
                            </div>
                        </div>
                        <select defaultValue="all" name="searchType" className="select select-bordered join-item">
                            <option value="all">All Category</option>
                            <option value="Salads and Soups">Salads and Soups</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Appetizers">Appetizers</option>
                            <option value="Main Courses">Main Courses</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Desserts">Desserts</option>
                        </select>
                        <div className="indicator">
                            <button className="btn btn-neutral join-item">Search</button>
                        </div>
                    </div>
                </form>
            </div>

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