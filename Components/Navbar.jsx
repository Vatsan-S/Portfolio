import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navContainer'>
            <ul className='navContent'>
                <li className="navList"><Link to='/'>Home</Link> </li>
                <li className="navList"><Link to='/about'>About</Link></li>
                <li className="navList"><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;