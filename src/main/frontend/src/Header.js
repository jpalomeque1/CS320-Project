import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <h1 className="header-text">PitStop DIY</h1>
            <img
                src="HomeI.png"
                alt="Car Garage"
                className="header-image"
            />
        </header>
    );
};

export default Header;
