// import React from 'react';

import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import userPic from "../assets/user.png";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User signed out");
                navigate("/login");
            })
            .catch(error => {
                console.log("Error message while loggin out: ", error);
            })
    }

    const navItems = <>
        {/* <li><NavLink to={'/'} className={({isActive}) => isActive? "bg-black" : ""}>Home</NavLink></li> */}
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allFoodItems'}>All Food Items</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
    </>;

    const logoutBtn = <button onClick={handleLogOut} className="btn btn-primary btn-xs sm:btn-sm md:btn-md">Log Out</button>;
    const loginBtn = <Link className="btn btn-primary btn-xs sm:btn-sm md:btn-md " to={'/login'}>Login</Link>;


    const dropDown = <div className="dropdown dropdown-end hover:cursor-pointer">
        {/* <label tabIndex={0} className="btn m-1">Click</label> */}
        <img tabIndex={0} className="w-6 h-6 rounded-full mr-2" src={user?.photoURL ? user?.photoURL : userPic} alt="" />
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={'/myAddedFoodItem'}>My Added Food Item</Link></li>
            <li><Link to={'/addFoodItem'}>Add Food Item</Link></li>
            <li><Link to={'/myOrders'}>My Ordered Food Item</Link></li>
        </ul>
    </div>;

    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">WebLogo+Name</a> */}
                <Link to={'/'} className="text-xs md:text-base lg:text-xl">WebLogo+Name</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <span className="mr-2 text-xs md:text-xl">{user?.displayName}</span>
                {
                    user && dropDown
                }
                {
                    user ? logoutBtn : loginBtn
                }
            </div>
        </div>
    );
};

export default Navbar;