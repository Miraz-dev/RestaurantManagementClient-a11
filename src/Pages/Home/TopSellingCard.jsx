// import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopSellingCard = ({topItem}) => {
    const {_id, totalOrders} = topItem;
    const [item, setItem] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/foods/${_id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [_id]);

    const {image, foodName, price, description, category} = item;

    return (
        <div className="card max-w-sm bg-base-100 shadow-xl">
            <figure><img src={image} alt={foodName} className='h-72 w-full object-cover' /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {foodName}
                </h2>
                <div>
                    <div className="badge badge-secondary">{category}</div>
                    <div className="badge badge-accent ml-1 text-gray-100">Total Ordered: {totalOrders}</div>
                    <div className="badge badge-error m-0 md:ml-1 text-gray-100">BDT. {price}</div>
                </div>
                
                <p className='text-gray-600'>{description?.slice(0,55)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`} className="btn btn-neutral">Details</Link>
                </div>
            </div>
        </div>
    );
};

TopSellingCard.propTypes = {
    topItem: PropTypes.object
};

export default TopSellingCard;