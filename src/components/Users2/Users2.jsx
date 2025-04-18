import React, { use } from 'react';

const Users2 = ({usersPromiss}) => {
const users = use(usersPromiss);
console.log('this data is users2:',users);

    return (
        <div>
            <h3>This is a users2 page</h3>
        </div>
    );
};

export default Users2;