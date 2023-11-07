// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <div className="p-1 md:p-0">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;