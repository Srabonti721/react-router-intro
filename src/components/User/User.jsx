import React from 'react';

const User = ({ users }) => {
    const { name, phone, email, website } = users;
  const userStyle={
border:'2px solid red',
borderRadius:'20px',
margin:'10px',
padding:'10px'
    }
    return (
        <div style={userStyle}>
            <h2>name : {name}</h2>
            <p>email : {email}</p>
            <p><small>phone : {phone}</small></p>
            <span>website : {website}</span>
        </div>
    );
};

export default User;