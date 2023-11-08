// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            {/* <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <div className="p-1 md:p-0">
                    <Outlet></Outlet>
                </div>
                <div className="relative bottom-0">
                    <Footer></Footer>
                </div>
            </div> */}
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <div className="relative bottom-0 mt-9">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Root;