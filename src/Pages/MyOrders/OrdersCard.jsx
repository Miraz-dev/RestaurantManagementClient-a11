// import React from 'react';
import PropTypes from 'prop-types';

const OrdersCard = ({ handleDelete, order }) => {
    const { foodName, foodPrice, dishOrdered, madeBy, image, description, category, origin, addedTime, _id } = order;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" className='w-full object-cover lg:h-full lg:w-72' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{foodName}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p className='font-semibold'>Dish made by: {madeBy}</p>


                <div className='text-sm space-y-1 text-gray-500'>
                    <p>Ordered date: {addedTime}</p>
                    <p>Quantity Ordered: {dishOrdered}</p>
                    <p>Grand Total: BDT. {foodPrice}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral" onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

OrdersCard.propTypes = {
    handleDelete: PropTypes.func,
    order: PropTypes.object
};

export default OrdersCard;