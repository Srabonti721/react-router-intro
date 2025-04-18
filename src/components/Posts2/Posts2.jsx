import React, { use } from 'react';

const Posts2 = ({posts2Promiss}) => {
    const posts2 = use(posts2Promiss);
    console.log('this is posts2 suspance data:',posts2);
    
    return (
        <div>
            <h2>This is  a posts2 page</h2>
        </div>
    );
};

export default Posts2;