// import React from 'react';

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import FoodCards from "./FoodCards";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllFoodItem = () => {
    const [allFoods, setAllFoods] = useState([]);

    const [extraAllFoods, setExtraAllFoods] = useState([]);
    // const [searchFoodItems, setSearchFoodItems] = useState([]);
    const {searchFoodItems, setSearchFoodItems} = useContext(AuthContext);
    const navigate = useNavigate();


    /**
     * @Pagination
    */
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [count, setCount] = useState(0);
    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log("pages: ", pages);

    useEffect(() => {
        axios.get("https://restaurant-management-server-eta.vercel.app/foods")
            .then(result => {
                // setSearchFoodItems(result.data);
                setExtraAllFoods(result.data);
            })
            .catch(err => {
                console.log("Error while retreiving data: ", err);
            });

        fetch("https://restaurant-management-server-eta.vercel.app/productscount")
            .then(res => res.json())
            .then(data => setCount(data.count));
    }, []);


    useEffect(() => {
        axios.get(`https://restaurant-management-server-eta.vercel.app/allfoods?page=${currentPage}&size=${itemsPerPage}`)
            .then(result => {
                setAllFoods(result.data);
                // setSearchFoodItems(result.data);
            })
            .catch(err => {
                console.log("Error while retreiving data: ", err);
            })
    }, [currentPage, itemsPerPage]);


    

    const handleSearchSubmit = e => {
        e.preventDefault();

        
            



        console.log("Initial SeachrFoodItem: ", searchFoodItems);
        const form = e.target;
        const search = (form.search.value).toLowerCase();
        console.log(search);
        // const match = allFoods.filter(food => food.foodName.toLowerCase() == search);
        // if(match){
        //     console.log(match);
        // }

        if(search === ""){
            return;
        }

        const regex = new RegExp(search, 'i');
        const match = extraAllFoods.filter(food => regex.test(food.foodName));
        if (match) {
            console.log(match);
            setSearchFoodItems(match);
            navigate("/searchResult");
        }

        if(!match.length) {
            toast.warn("No Such Dishes Exist", { position: "top-center" });
            setSearchFoodItems([]);
        }

    }

    return (
        <div className="min-h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FP || ALL FOOD</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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
                        allFoods.map(food => <FoodCards key={food._id} food={food}></FoodCards>)
                    }
                </div>
            </div>


            {/* Pagination */}
            {/* <p className="text-center">CurrentPage: {currentPage}</p> */}
            <div className="flex justify-center">
                <div className="my-10">
                    {
                        pages.map(page => <button
                            className={currentPage === page ? 'btn btn-neutral mr-2' : 'btn mr-2'}
                            key={page}
                            onClick={() => setCurrentPage(page)}
                        >{page}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoodItem;