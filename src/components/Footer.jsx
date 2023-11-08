// import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { IoRestaurantOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black font-medium text-base-content rounded">
            <nav className="grid grid-flow-col gap-4 text-white">
                <Link to={'/allFoodItems'} className="link link-hover">Dishes</Link>
                <Link to={'/blog'} className="link link-hover">Blog</Link>
                <Link to={'/'} className="link link-hover">Home</Link>
                {/* <Link to={'/services'} className="link link-hover">Services</Link> */}
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/miraz-farid-630987293/"><FaLinkedin className="w-6 h-6 text-blue-600"/></a>
                    <a href="https://www.youtube.com/channel/UCfAdaWHiZzYfsvPqTV57d9Q"><FaYoutube className="w-6 h-6 text-red-600"/></a>
                    <a href="https://www.facebook.com/CodeCraftsAndDesignStudio"><FaFacebook className="w-6 h-6 text-blue-900"/></a>
                </div>
            </nav>
            <aside className="text-white flex">
                <p>Copyright © 2023 - All right reserved by FoodoPedia</p><span><IoRestaurantOutline className="w-6 h-6 text-blue-600"/></span> 
            </aside>
        </footer>
    );
};

export default Footer;