// import React from 'react';

import axios from "axios";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UpdateFood = () => {
    const { foodName, category, price, description, image, origin, qty, user_email, user_name, _id } = useLoaderData();

    const [selectedType, setSelectedType] = useState("");
    const handleSelectTypeChange = (event) => {
        setSelectedType(event.target.value); // Update the selectedOption state with the selected value
    };
    const navigate = useNavigate();

    const backGroundImg = {
        backgroundImage: 'url(https://i.ibb.co/rty90bC/spices-for-use-as-cooking-ingredients-on-a-wooden-background-with-fresh-vegetables-healthy-food-herb.jpg)'
    }

    const formBackGround = {
        // backgroundImage: 'url(https://i.ibb.co/RgWdmhJ/pexels-photo-326333.jpg)'
        backgroundImage: 'url(https://i.ibb.co/5j7H2TZ/istockphoto-583726578-612x612.jpg)'
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const foodName = form.name.value;
        const category = selectedType;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.img.value;
        const origin = form.origin.value;
        const qty = form.qty.value;
        // const user_name = user_name;
        // const user_email = user_email;

        const info = { foodName, category, price, description, image, origin, qty, user_email, user_name };
        console.log(info);

        axios.put(`http://localhost:5000/foods/${_id}`, info)
            .then(result => {
                if (result.data.modifiedCount > 0) {
                    toast.success("Data Updated", { autoClose: 1000, position: "top-center" });
                    setTimeout(() => {
                        navigate(`/details/${_id}`);
                    }, 2000);
                }
            })
            .catch(err => {
                console.log("Error while Updating data PUT /foods: ", err);
            })
    }

    return (
        <div className="min-h-screen my-4 m-auto text-orange-900 flex items-center" style={backGroundImg}>
            <div className="max-w-xs mx-auto md:max-w-xl border-2 border-orange-900 rounded">
                <ToastContainer />
                <div className="p-2 text-orange-400 bg-orange-900">
                    Update Food Information
                </div>
                <form className="p-2 space-y-4 shadow-sm" style={formBackGround} onSubmit={handleSubmit}>


                    <div>
                        <label className="font-semibold mb-2">Food Name:</label>
                        <input
                            type="text"
                            defaultValue={foodName}
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
                            defaultValue={price}
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
                            defaultValue={qty}
                            name="qty"
                            required
                            placeholder="qty"
                            id="" />
                    </div>

                    <div>
                        <label className="font-semibold mb-2">Description:</label>
                        <input
                            className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 placeholder:text-orange-100 text-orange-400"
                            type="text" defaultValue={description} name="description" required placeholder="Short Description" />
                    </div>

                    <div>
                        <label className="font-semibold mb-2">Food Origin:</label>
                        <input
                            className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 placeholder:text-orange-100 text-orange-400"
                            type="text" defaultValue={origin} name="origin" required placeholder="Food Origin.." />
                    </div>

                    <div>
                        <label className="font-semibold mb-2">Upload Image</label>
                        <input
                            className="w-full p-2 border-2 rounded border-orange-950 bg-orange-900 placeholder:text-orange-100 text-orange-400 "
                            type="url" defaultValue={image} name="img" required placeholder="IMAGE URL" id="" />
                    </div>

                    <div>
                        <span className="font-semibold mb-2 text-orange-100 block">Added by: {user_name}</span>
                        <span className="font-semibold mb-2 text-orange-100 block">Email: {user_email}</span>
                    </div>

                    <input type="submit" value="Submit" className="btn bg-orange-900 hover:bg-orange-950 text-orange-400 border-orange-950 w-full" />
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;