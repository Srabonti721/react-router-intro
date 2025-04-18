import React, { use } from 'react';

const UserDetails2 = ({userDetails2Promice}) => {
// const user = use(userDetails2Promice)
// console.log(user);

    const {name,email} =use(userDetails2Promice);
    return (
        <div>
            <h2> {name}</h2>
            <p>email: {email}</p>
        </div>
    );
};

export default UserDetails2;