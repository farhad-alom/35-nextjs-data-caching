'use client';
import Link from 'next/link';
import React, { use } from 'react';
import { UserContext } from '../contexts/UserContext';

const BookCard = ({ book }) => {
    const { id, name, description } = book;

    const user = use(UserContext);
    console.log('context in the BookCard', user);
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>

                    <Link href={`/books/${id}`}>
                        <button className="btn btn-primary">Show Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;