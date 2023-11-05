// import React from 'react';

import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const {googleSignIn, signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Manual SIGN IN
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log("From LogIn Page: ", result.user);

                toast.success("Login Success", { autoClose: 1000, position: "top-center" });
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 2000);
            })
            .catch(error => {
                console.log("From login page: ", error.message);
                toast.error("Incorrect email or password", { position: "top-center" });
            })
    }


    // GOOGLE SIGN-IN
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log("Google sign in: ", result.user);

                // Saving user info on the database.
                // Here i need to stop duplication.
                fetch("http://localhost:5000/user")
                    .then(res => res.json())
                    .then(datas => {
                        console.log("see this: ", datas, typeof datas);
                        const duplicate = datas.filter(data => data.uid === result.user.uid);
                        // console.log("Ans is: ", duplicate);
                        if (!duplicate.length) {
                            const info = { name: result.user.displayName, email: result.user.email, uid: result.user.uid };
                            fetch("http://localhost:5000/user", {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(info)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log("Client side registration mongodb: ", data);
                                })
                        }else{
                            console.log("User is already saved on database.");
                        }

                    })


                // end

                toast.success("Login Success", { autoClose: 1000, position: "top-center" });
                setTimeout(() => {
                    navigate(location?.state ? location.state : "/");
                }, 2000);
            })
            .catch(error => {
                console.log("GoogleSignInError: ", error);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <ToastContainer />
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
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
                            <button className="btn btn-outline btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-xs text-center mb-4">Don&apos;t Have an account? <Link to={'/register'} className="text-blue-400 hover:text-blue-600 hover:font-semibold cursor-pointer">Register</Link></p>
                    <div className="divider px-8">OR</div>
                    <p className="text-xs text-center mb-4">Sign In With <span onClick={handleGoogleSignIn} className="text-red-400 hover:text-red-600 hover:font-semibold cursor-pointer">Google</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;