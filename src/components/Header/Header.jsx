import React from 'react';
import { Link, NavLink } from 'react-router';
import'./Header.css'
const Header = () => {
    return (
        <div >
        <h1>this is header</h1>
        <nav className='matgin '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/laptop">Laptop</NavLink>
            <NavLink to="/computer">Computer</NavLink>
        </nav>
        </div>
    );
};

export default Header;