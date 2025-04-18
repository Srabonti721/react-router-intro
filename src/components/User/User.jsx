import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ users }) => {
    const [showinfo, setShowinfo] = useState();
    const [visitHome, setVisitHome] = useState();
    const { id, name, phone, email, website } = users;

    const userDetails2Promice = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())

    const userStyle = {
        border: '2px solid red',
        borderRadius: '20px',
        margin: '10px',
        padding: '10px'
    }
    if(visitHome){
return<Navigate to ='/'></Navigate>
    }
    const buttonStyle = {
        backgroundColor: 'gray',
        marginLeft: '10px',
    }
    return (
        <div style={userStyle}>
            <h2>name : {name}</h2>
            <p>email : {email}</p>
            <p><small>phone : {phone}</small></p>
            <p>website : {website}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button style={buttonStyle} onClick={() => setShowinfo(!showinfo)}>{showinfo ? 'hide' : 'show'} info</button>
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
            {
                showinfo && <Suspense fallback={<span>data loading...</span>}>
                    <UserDetails2 userDetails2Promice={userDetails2Promice} ></UserDetails2>
                </Suspense>
            }
        </div>
    );
};

export default User;