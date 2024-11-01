import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link className="nav-button" to="/">Home</Link></li>
                <li><Link className="nav-button" to="/diy">DIY</Link></li>
                <li><Link className="nav-button" to="/tools">Tools</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
