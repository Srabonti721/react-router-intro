import React from 'react';
import { Link, NavLink } from 'react-router';
import'./Header.css'
const Header = () => {
    return (
        <div >
        <h1>This is header</h1>
        <nav className='matgin '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/laptop">Laptop</NavLink>
            <NavLink to="/computer">Computer</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to ='users2'>Users2</NavLink>
            <NavLink to='posts'>Posts</NavLink>
            <NavLink to='posts2'>Posts2</NavLink>
        </nav>
        </div>
    );
};

export default Header;