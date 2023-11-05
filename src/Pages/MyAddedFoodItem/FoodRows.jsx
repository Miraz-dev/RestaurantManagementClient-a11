// import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodRows = ({items}) => {
    const {foodName, image, price, origin, qty, description, category, _id} = items;
    return (
        <tr>
            {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th> */}
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{foodName}</div>
                        <div className="text-sm opacity-50">Origin: {origin}</div>
                    </div>
                </div>
            </td>
            <td>{category}</td>
            <td>{description}</td>
            <td>
                {qty}
            </td>
            <td>BDT. {price}</td>
            <th>
                <Link to={`/updateFood/${_id}`} className="btn btn-ghost btn-xs">Update</Link>
            </th>
        </tr>
    );
};

FoodRows.propTypes = {
    items: PropTypes.object
};

export default FoodRows;