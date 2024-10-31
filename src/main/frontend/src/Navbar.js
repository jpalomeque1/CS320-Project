import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Importing the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/" className="nav-button">Home</Link>
                <Link to="/DIY" className="nav-button">DIY</Link>
                <Link to="/Tools" className="nav-button">Tools</Link>
            </div>
        </nav>
    );
}

export default Navbar;
