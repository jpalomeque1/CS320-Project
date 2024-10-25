import React from 'react';
import './Footer.css'; // Ensure you create this CSS file for styles

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Left Side: Icon */}
                <div className="footer-icon">
                    <img
                        src="Logo.png"
                        alt="Icon"
                        className="footer-icon-image"
                    />
                </div>

                {/* Middle: Links */}
                <div className="footer-links">
                    <div className="footer-links-row">
                        <a href="#" className="footer-link">Home</a>
                        <a href="#" className="footer-link">About Us</a>
                        <a href="#" className="footer-link">Contact Us</a>
                    </div>
                    <div className="footer-links-row">
                        <a href="#" className="footer-link">Shop</a>
                        <a href="#" className="footer-link">Terms of Use</a>
                        <a href="#" className="footer-link">Careers</a>
                    </div>
                </div>

                {/* Right Side: Social Media */}
                <div className="footer-social">
                    <span className="footer-social-text">Follow us on our social</span>
                    <div className="footer-social-icons">
                        <a href="#">
                            <img src="instagram.jpeg" alt="Instagram" className="social-icon" />
                        </a>
                        <a href="#">
                            <img src="facebook.webp" alt="Facebook" className="social-icon" />
                        </a>
                        <a href="#">
                            <img src="youtube.png" alt="YouTube" className="social-icon" />
                        </a>
                        <a href="#">
                            <img src="twitter.jpeg" alt="X" className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
