// import React from 'react';

import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const FoodDetails = () => {
    const { foodName, image, price, origin, qty, description, category, _id, user_name, user_email} = useLoaderData();
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = () => {
        const match = user_email == user?.email;

        if(Number(qty) === 0){
            toast.warn("Item is no longer available in inventory!", {position:"top-center"});
        }else if(match){
            toast.error("You cannot ORDER the item you have created! ", {position:"top-center"});
        }
        else{
            navigate(`/order/${_id}`);
        }
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FP || Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <ToastContainer />
            <div className="hero min-h-[75vh]" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold">{foodName}</h1>
                        <p className="mb-5">{description}</p>
                        {/* <Link to={`/order/${_id}`} className="btn btn-neutral shadow-md">Click Here To Order</Link> */}
                        <button onClick={handleClick} className="btn btn-neutral shadow-md">Click Here To Order</button>
                        
                    </div>
                </div>
            </div>
            <div className="py-8 space-y-4 bg-green-50 border-2 rounded border-accent px-2">
                <h1 className="text-xl md:text-5xl font-bold text-gray-600">Name: <span className="text-gray-600">{foodName}</span></h1>
                <p className="text-xl text-gray-600 font-bold">Made By: {user_name}</p>
                <p className="text-gray-500 font-medium">- Country of origin: {origin}</p>
                <p className="text-gray-500 font-medium">- Category: {category}</p>
                <p className={`${Number(qty) === 0 ? 'text-red-500 font-semibold' : 'text-gray-500 font-medium'}`}>- Quantity remaining: {qty}</p>
                <p className="text-gray-500 font-medium">- Price: BDT.{price}</p>
            </div>
        </div>
    );
};

export default FoodDetails;