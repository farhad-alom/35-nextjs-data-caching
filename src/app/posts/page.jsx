import React from 'react';
/*
GET----POST----UPDATE: put patch----DELETE:---
*/

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const getPosts3 = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
}
const getPosts2 = async () => {
    // try {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     return res.json();
    // }
    // catch (error) {
    //     throw new Error('Failed to fetch posts');
    // }
}

const PostPage = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();
    const posts = await getPosts();


    return (
        <div>
            <h2>Hellos POST : {posts.length}</h2>
        </div>
    );
};

export default PostPage;
/*caching-এর মূল উদ্দেশ্য:

Performance বাড়ানো + unnecessary request কমানো + resource বাঁচানো।

তুমি Next.js-এ caching শিখতে গেলে এরপর এই ৪টা জিনিস পরিষ্কার করো:

force-cache → no-store → revalidate → ISR */
/*try-এর ভিতরে এমন code রাখি যেখানে error হওয়ার সম্ভাবনা আছে। try = চেষ্টা করো → catch = error ধরো → finally = শেষ হলে এটা করো।*/

/*<div> এখানে একটি parent/container element হিসেবে ব্যবহার করা হয়েছে, যার ভিতরে <h2> রাখা হয়েছে। */