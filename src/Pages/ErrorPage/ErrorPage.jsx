// import React from 'react';
// 404 Route

import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <div className="mx-auto mt-12 space-y-4 text-center">
                <h1 className="text-3xl text-center font-bold">Oops! {error.status} {error.statusText}</h1>
                <p className="text-2xl text-center">Sorry, an unexpected error has occurred.</p>
                <Link to={'/'} className='btn btn-neutral'>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;