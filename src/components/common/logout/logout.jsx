import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css';
import TokenClient from '../../../constants/TokenClient';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        TokenClient.removeAll();
        navigate('/auth');
    };

    return (
        <div className="logout-container">
            <h1>Are you sure you want to logout?</h1>
            <div className="logout-buttons">
                <button
                    onClick={handleLogout}
                    className="logout-button logout-confirm"
                >
                    Logout
                </button>
                <button 
                    onClick={() => navigate(-1)} 
                    className="logout-button logout-cancel"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default Logout;
