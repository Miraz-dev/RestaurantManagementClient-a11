// import React from 'react';

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
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
                    <p className="text-xs text-center mb-4">Sign In With <span className="text-red-400 hover:text-red-600 hover:font-semibold cursor-pointer">Google</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;