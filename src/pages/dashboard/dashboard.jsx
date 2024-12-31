import React from "react";
import "./dashboard.css";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path);
    };
    
    return (
        <React.Fragment>
            <div className="dashboardOuter">
                <div className="sidebar">
                    <h5 className="mt-4" onClick={() => handleNavigation('/dashboard')}>DASHBOARD</h5>
                    <ul className="sidebarMenu">
                        <li className="menuItem" onClick={() => handleNavigation('/')}>Home</li>
                        <li className="menuItem" onClick={() => handleNavigation('#')}>Profile</li>
                        <li className="menuItem" onClick={() => handleNavigation('/dashboard/folders')}>Bucket</li>
                        <li className="menuItem" onClick={() => handleNavigation('#')}>Settings</li>
                        <li className="menuItem" onClick={() => handleNavigation('/dashboard/logout')}>Logout</li>
                    </ul>
                </div>
                <div className="mainContent">
                    <Outlet />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
