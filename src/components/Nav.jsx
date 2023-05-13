import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    return (
        <div className='nav'>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/recipeList'>Recipe List</NavLink>
                    </li>
                    <li>
                        <NavLink to='/addRecipe'>Add Your Own</NavLink>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Nav;