// import React from 'react';

import moment from "moment/moment";
import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet";

const Purchase = () => {
    const { foodName, image, price, origin, qty, description, category, _id, user_name, user_email } = useLoaderData();
    const time = moment().format("MMM Do YY");
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const [number, setNumber] = useState(0); 
    const [quantity, setQuantity] = useState(Number(qty));
    const [foodPrice, setFoodPrice] = useState(0);

    const Subtract = () => {
        // e.preventDefault();
        if(number > 1){
            setNumber(prev => prev-1);
            setQuantity(quantity + 1);
            setFoodPrice(prev => prev - Number(price));
        }

    }

    const Add = () => {
        // console.log("Num: ", number);
        if(number < Number(qty)){
            // console.log(typeof quantity);
            setNumber(prev =>{
                // console.log("Prev: ", prev);
                return prev + 1;
            });
            setQuantity(quantity - 1);
            
            // console.log("number after increment: ", number);
            setFoodPrice(prev => {
                return prev + Number(price);
            });
        }
    }

    // const handlePriceChange = () => {
    //     setFoodPrice(number * price);
    // }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("HandleSubmit Qty selected: ", number);
        console.log("HandleSubmit Qty remained: ", quantity);
        console.log("HandleSubmitTotalPrice: ", foodPrice);

        if(number === 0){
            toast.error("Please set the quantity", {position:"top-center"});
            return;
        }

        // Here i need to save the order info on database. Make 
        // sure to pass the logged-in email address, and user name who made the dish,
        // finaly quantity ordered and total price, date
        // on order collection.
        const info = {
            foodName,
            foodPrice,
            dishOrdered: number,
            madeBy: user_name,
            orderedBy: user.email,
            image,
            description,
            category,
            origin,
            addedTime: time,
            foodUID: _id,
        }

        axios.post("https://restaurant-management-server-eta.vercel.app/orders", info)
            .then(result => {
                // console.log("From POST /foods:", result.data.insertedId);
                if(result.data.insertedId){
                    toast.success("Food Item Added!", {autoClose:1000, position:"top-center"});

                    // Update the existing food item's qty here.
                    axios.patch(`https://restaurant-management-server-eta.vercel.app/foods/${_id}`, {quantity})
                        .then(result => {
                            if(result.data.modifiedCount > 0){
                                console.log("Existing quantity updated.");
                            }
                            console.log(result.data);
                        })
                        .catch(err => {
                            console.log("error while patching: ", err);
                        })
                    // End of PATCHING

                    // Update the order count using patch.
                    /**
                     * Procedure: 
                     * 1.First GET all /orders
                     * 2. Match and filter the current _id with the existing foodUID from database.
                     * 3. if there is a match then patch the "dishordered" with the new value()
                     * 4. This strategy requires more thought.
                     */

                    // Redirect user to other page here
                    setTimeout(() => {
                        navigate("/myOrders");
                    }, 2000);

                }
            })
            .catch(err => {
                console.log("Error while saving data POST /orders: ", err);
            });


        // Also I need to update the existing food item's quantity. pass the quantity <-state
    }

    return (
        <div className="mt-14">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FP || Orders</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                {/* <div className="max-w-sm mx-auto border-2 border-black p-8">
                    <h1 className="font-bold text-neutral">Order Summary</h1>
                    <hr className="my-4" />
                </div> */}
                <div className="card max-w-sm mx-auto bg-base-400 shadow-xl">
                    <h1 className="text-center my-4 text-xl font-medium">Order Summary</h1>
                    <figure><img src={image} alt="Food Picture" className="object-cover" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{foodName}</h2>
                        <p className="text-gray-400">Buyer name: {user?.displayName}</p>
                        <p className="text-gray-400">Buyer email: {user?.email}</p>
                        <p className="text-gray-400">Date: {time}</p>
                        
                        <div>
                            <p className="text-gray-400 mb-2">Available Qty: {quantity}</p>
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400">Set Quantity: </span>
                                <button type="button" className="btn btn-sx btn-neutral" onClick={Subtract}>-</button>
                                <span>{number}</span>
                                <button type="button" className="btn btn-sx btn-neutral" onClick={Add}>+</button>
                            </div>
                            {/* <input type="number" className="border rounded w-full p-2" placeholder="Set quantity here.." /> */}
                        </div>
                        <p className="text-gray-400">Price/Item: BDT. {price}</p>
                        <hr />
                        <p className="text-gray-400">Total: BDT. {foodPrice}</p>
                        <input type="submit" className="btn btn-neutral" value="Purchase" />
                        {/* <div className="card-actions">
                        </div> */}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Purchase;