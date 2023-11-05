// import React from 'react';

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Register = () => {

    const { createUser, setProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    // This function runs upon form submission.
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        console.log("From handleRegister: ", name, email, password, photoURL);

        if(password.length < 6){
            console.log("Pass <6");
            toast.warn("Password length should be 6 or more");
            return;
        }

        if(!/^(?=.*[A-Z]).+$/.test(password)){
            toast.warn("Password should have a Capital letter");
            return;
        }

        if(!/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/.test(password)){
            toast.warn("Password should have a special character");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log("Msg Upon Successful register: ", result.user);
                toast.success("Registration successful", {autoClose:1000, position:"top-center"});

                // Saving the user info on database.
                const info = {name, email, password, uid: result.user.uid, photoURL};
                axios.post("http://localhost:5000/user", info)
                    .then(result => {
                        console.log("Client side registraion mongoDB: ", result.data);
                    })
                    .catch(err => {
                        console.log("Client side registraion mongoDB error: ", err);
                    })
                
                // Updating Profile Upon registration.
                setProfile(result.user, {
                    displayName: name,
                    photoURL
                })
                .then(() => {
                    console.log("Profile picture and name is set.");
                })
                .catch(error => {
                    console.log("Error while setting name and photoURL: ", error);
                })

                // Redirecting User to Home.
                setTimeout(() => {
                    navigate("/");
                }, 2000);


                
            })
            .catch(error => {
                console.log("Error while registering: ", error);
                toast.warn(error.message);
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <ToastContainer />
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Picture</span>
                            </label>
                            <input type="url" name="photoURL" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className="text-xs text-center mb-4">Already have an Account? <Link to={'/login'} className="text-blue-400 hover:text-blue-600 hover:font-semibold cursor-pointer">Login</Link></p>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;