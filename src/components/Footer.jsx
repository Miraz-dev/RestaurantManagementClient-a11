import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black font-medium text-base-content rounded mt-32">
            <nav className="grid grid-flow-col gap-4 text-white">
                <Link to={'/about'} className="link link-hover">About us</Link>
                <Link to={'/contact'} className="link link-hover">Contact</Link>
                <Link to={'/'} className="link link-hover">Home</Link>
                <Link to={'/services'} className="link link-hover">Services</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <FaTwitter className="w-6 h-6 text-blue-600"/>
                    <FaYoutube className="w-6 h-6 text-red-600"/>
                    <FaFacebook className="w-6 h-6 text-blue-900"/>
                </div>
            </nav>
            <aside className="text-white">
                <p>Copyright © 2023 - All right reserved by Miraz Farid</p>
            </aside>
        </footer>
    );
};

export default Footer;