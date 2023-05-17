import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import Nav from './Nav';

const Header = () => {
    return (
        <div className="header">
           <NavLink to='./' className='Nal'><h1>DELICIOUS</h1></NavLink> 
            <Nav/>
        </div>
    );
};

export default Header;