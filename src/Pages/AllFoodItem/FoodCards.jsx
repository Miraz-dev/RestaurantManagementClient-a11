// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodCards = ({ food }) => {
    const { foodName, image, price, origin, qty, description, category, _id, } = food;
    return (
        <div className="card max-w-sm bg-base-100 shadow-xl">
            <figure><img src={image} alt={foodName} className='h-72 w-full object-cover' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {foodName}
                </h2>
                <div>
                    <div className="badge badge-secondary">{category}</div>
                    <div className="badge badge-accent ml-1 text-gray-100">Quantity: {qty}</div>
                    <div className="badge badge-error ml-1 text-gray-100">BDT. {price}</div>
                </div>
                
                <p>{description.slice(0,55)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`} className="btn btn-neutral">Details</Link>
                </div>
            </div>
        </div>
    );
};

FoodCards.propTypes = {
    food: PropTypes.object
};

export default FoodCards;