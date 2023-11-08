// import React from 'react';
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message sent!", {position:"top-center"});
        e.target.reset();
    }
    return (
        <div className="py-8 my-24 max-w-4xl min-h-[55vh] p-2 md:p-0 mx-auto bg-gray-900 rounded relative">
            <ToastContainer />
            <h1 className="text-base sm:text-xl md:text-3xl font-semibold mb-4 text-center text-gray-200">Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 px-2">
                    <input
                        className="border-2 rounded py-2"
                        type="text" placeholder="Name.." required name="name" id="" />
                    <input
                        className="border-2 rounded py-2"
                        type="number" placeholder="Phone number.." required name="number" id="" />
                    <input
                        className="border-2 rounded py-2"
                        type="email" placeholder="Email Address" required name="email" id="" />
                    <input
                        className="border-2 rounded py-2"
                        type="text" placeholder="Subject.." required name="subject" id="" />
                </div>
                <div className="px-2 mb-2">
                    <textarea className="w-full min-h-[200px] border-2 rounded px-2" name="message" ></textarea>
                </div>
                <div className="absolute left-[50%] -bottom-16 transform translate-x-[-50%]">
                    <input 
                        className="text-gray-950 text-xs md:text-base py-1 px-2 md:py-2 md:px-4 border-2 border-gray-950 rounded shadow-md hover:bg-gray-950 hover:text-gray-300 active:scale-90 hover:shadow-xl"
                        type="submit" value="Submit" />
                </div>
            </form>
            
        </div>
    );
};

export default Contact;