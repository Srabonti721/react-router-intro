import React from 'react';
import { useLoaderData } from 'react-router';

const Posts = () => {
    const posts= useLoaderData();
    console.log(posts);
    
    return (
        <div>
            <h2>this is a posts page</h2>
        </div>
    );
};

export default Posts;