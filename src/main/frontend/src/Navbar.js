import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav >
            <div>
                <Link to="/">Home </Link>
                {/* just for spacing */}
                <span></span>
                <Link to="/DIY">DIY</Link>
                <span></span>
                <Link to="/Log">Log</Link>
            </div>
        </nav>
    )
}
export default Navbar;