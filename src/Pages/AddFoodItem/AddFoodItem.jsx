// import React from 'react';

import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddFoodItem = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState("");
    const handleSelectTypeChange = (event) => {
        setSelectedType(event.target.value); // Update the selectedOption state with the selected value
    };

    const backGroundImg = {
        backgroundImage: 'url(https://i.ibb.co/rty90bC/spices-for-use-as-cooking-ingredients-on-a-wooden-background-with-fresh-vegetables-healthy-food-herb.jpg)'
    }

    const formBackGround = {
        // backgroundImage: 'url(https://i.ibb.co/RgWdmhJ/pexels-photo-326333.jpg)'
        backgroundImage: 'url(https://i.ibb.co/5j7H2TZ/istockphoto-583726578-612x612.jpg)'
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.name.value;
        const category = selectedType;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.img.value;
        const origin = form.origin.value;
        const qty = form.qty.value;
        const user_name = user?.displayName;
        const user_email = user?.email;

        const info = {foodName, category, price, description, image, origin, qty, user_email, user_name};
        console.log(info);

        axios.post("https://restaurant-management-server-q6wp4twq3-miraz-farids-projects.vercel.app/foods", info)
            .then(result => {
                console.log("From POST /foods:", result.data.insertedId);
                if(result.data.insertedId){
                    toast.success("Food Item Added!", {autoClose:1000, position:"top-center"});
                    form.reset();

                    // Redirect user to other page here
                    setTimeout(() => {
                        navigate("/myAddedFoodItem");
                    }, 2000);

                }
            })
            .catch(err => {
                console.log("Error while saving data POST /foods: ", err);
            })
    }

    return (
        <div className="min-h-screen my-4 m-auto text-orange-900 flex items-center" style={backGroundImg}>
            <div className="max-w-xs mx-auto md:max-w-xl border-2 border-orange-900 rounded">
                <ToastContainer />
                <div className="p-2 text-orange-400 bg-orange-900">
                    Food Information
                </div>
                <form className="p-2 space-y-4 shadow-sm" style={formBackGround} onSubmit={handleSubmit}>


                    <div>
                        <label className="font-semibold mb-2">Food Name:</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name..."
                            id=""
                            className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 placeholder:text-orange-100 text-orange-400"
                        />
                    </div>


                    <div>
                        <label className="font-semibold mb-2">Select Category:</label>
                        <select value={selectedType} onChange={handleSelectTypeChange} required className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 text-orange-400">
                            <option value="">Select an option</option>
                            <option value="Appetizers">Appetizers</option>
                            <option value="Main Courses">Main Courses</option>
                            <option value="Seafood">Seafood</option>
                            <option value="Beverages">Beverages</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Salads and Soups">Salads and Soups</option>
                        </select>
                    </div>

                    <div>
                        <label className="font-semibold mb-2">Price: </label>
                        <input
                            className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 placeholder:text-orange-100 text-orange-400"
                            type="number"
                            name="price"
                            required
                            placeholder="price"
                            id="" />
                    </div>


                    <div>
                        <label className="font-semibold mb-2">Quantity: </label>
                        <input
                            className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 placeholder:text-orange-100 text-orange-400"
                            type="number"
                            name="qty"
                            required
                            placeholder="qty"
                            id="" />
                    </div>

                    <div>
                        <label className="font-semibold mb-2">Description:</label>
                        <input
                            className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 placeholder:text-orange-100 text-orange-400"
                            type="text" name="description" required placeholder="Short Description" />
                    </div>

                    <div>
                        <label className="font-semibold mb-2">Food Origin:</label>
                        <input
                            className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 placeholder:text-orange-100 text-orange-400"
                            type="text" name="origin" required placeholder="Food Origin.." />
                    </div>

                    <div>
                        <label className="font-semibold mb-2">Upload Image</label>
                        <input
                            className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 placeholder:text-orange-100 text-orange-400 "
                            type="url" name="img" required placeholder="IMAGE URL" id="" />
                    </div>

                    <div>
                        <span className="font-semibold mb-2 text-orange-100 block">Added by: {user?.displayName}</span>
                        <span className="font-semibold mb-2 text-orange-100 block">Email: {user?.email}</span>
                    </div>

                    <input type="submit" value="Submit" className="btn bg-orange-900 hover:bg-orange-950 text-orange-400 border-orange-950 w-full" />
                </form>
            </div>
        </div>
    );
};

export default AddFoodItem;