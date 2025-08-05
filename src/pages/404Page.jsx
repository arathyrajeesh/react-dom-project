import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/404Page.css';

const NotFound = () => {
    return (
        <div className="error-container">
            <h1 className="error-heading">404</h1>
            <h2 className="error-title">Page Not Found</h2>
            <p className="error-message">
                Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="home-button">
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFound;