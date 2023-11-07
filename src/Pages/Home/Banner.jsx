// import React from 'react';

import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-[75vh]" style={{ backgroundImage: 'url(https://i.ibb.co/ZdWX02K/food-4k-anl1yr892h6ccjeb.jpg)' }}>
            
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Experience Culinary at Its Finest</h1>
                    <p className="mb-5">Discover a world of flavors at Foodopedia. Our chefs transform ordinary ingredients into extraordinary dishes, capturing the essence of international cuisine. Immerse yourself in an ambiance of sophistication and savor each moment</p>
                    <Link to={'/allFoodItems'} className="btn btn-accent">Explore Our Dishes</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;