'use client';
import Link from 'next/link';
import React from 'react';
import useUser from '../hooks/useUser';

const Navbar = () => {
    const user = useUser();
    console.log('form context in navbar', user);


    const link = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/posts">Post</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/books">Books</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <Link href="/" className='btn btn-ghost text-xl'>
                    daisyUI
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};
export default Navbar;
/* <Link href="/" className='btn btn-ghost text-xl'>
                    daisyUI
                </Link> 
ekhane alada kore kono <a> use kora lagbe nah*/

/*return (...)-এর ভিতরের পুরো অংশটাকে সাধারণভাবে JSX returned by the component বা JSX markup বলা হয়। */

/*Navbar function → { ... } = Function Body → link = Local Variable → return = JSX return করে। */

/*{link} এর অর্থ হচ্ছে: "link variable-এর ভিতরে যা আছে, সেটা এখানে বসিয়ে দাও।"  {link}-এর ক্ষেত্রে এটাকে বলা হয় JSX Expression / JavaScript Expression inside JSX।*/

/*tabIndex={-1} দিলে কোনো element সাধারণ Tab key দিয়ে focus করা যায় না। */

/*1st make a component folder to inside of app. then make a file thats name should be Navbar.jsx.  this Navbar will be import to app/layouts.js*/

/*return-এর উপরে link-এ <li> গুলো রাখা হয়েছে যাতে একই JSX content-কে variable হিসেবে সংরক্ষণ করে পরে reuse করা যায়।

এই পদ্ধতিকে সাধারণভাবে JSX stored in a variable বা JSX variable বলা হয়।
পরে {link} লিখলেই ওই সব <li> একসাথে render হবে। */