import React from 'react';
import logo from '../Images/hotel_logo.png'; // Path for the logo
import './customer_header.css'; // Importing the CSS file

function Header() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = '/login'; // Force redirect to login page
    };

    return (
        <nav className="header-nav">
            <div className="header-container">
                <img src={logo} alt="Hotel Breeta's Garden" className="header-logo" />

                <div className="header-links">
                    <a href="/home">Home</a>
                    <a href="/bookings">Bookings</a>
                    <a href="/reviews">Reviews</a>
                    <a href="/services">Services</a>
                    <a href="/gallery">Gallery</a>
                </div>

                <div className="header-auth">
                    {isLoggedIn ? (
                        <span className="header-logout" onClick={handleLogout}>Logout</span>
                    ) : (
                        <a href="/login" className="header-login">Login</a>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;
