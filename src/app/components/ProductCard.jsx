'use client';
import React from 'react';
import useUser from '../hooks/useUser';

const ProductCard = ({ product }) => {
    const { id, name, description, price } = product;
    const user = useUser();
    console.log('user from context in productcard', user);

    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;