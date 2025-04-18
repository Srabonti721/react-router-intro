import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    console.log(users);

    return (
        <div>
            <h3>this is a users page</h3>
            <div>
                {
                    users.map(users =>
                        <User
                            key={users.id}
                            users={users}>
                        </User>)
                }
            </div>
        </div>
    );
};

export default Users;