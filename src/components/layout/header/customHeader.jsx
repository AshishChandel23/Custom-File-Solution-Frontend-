import React, { useState, useEffect } from 'react';
import './customheader.css';
import { useNavigate } from 'react-router-dom';
import TokenClient from '../../../constants/TokenClient';
import navbarLogo from '../../../assets/images/authImage.png';

const CustomHeader = ({ menuItems, itsUser }) => {
  const navigate = useNavigate();
  const authToken = TokenClient.getUserToken();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (itsUser) {
    useEffect(() => {
      if (!authToken) {
        navigate('/');
      }
    }, [authToken, navigate]);
  }

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <React.Fragment>
      <nav className="navbarCover">
        <div className="navbar">
          <div className="navbar-brand">
            <img src={navbarLogo} alt="Logo" className="navbarLogo" />
            <a>File Bucket</a>
          </div>
          <button
            className="navbar-toggler"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <ul className={`navList ${isMenuOpen ? 'navList-open' : ''}`}>
            {menuItems.map((item) =>
              item.child ? (
                <li key={item.name} className="navItem" role="button">
                  <span onClick={() => handleNavigation(item.path)}>
                    {item.name}
                  </span>
                  <ul className="childMenu">
                    {item.child.map((childItem) => (
                      <li
                        key={childItem.name}
                        className="childNavItem"
                        onClick={() => handleNavigation(childItem.path)}
                      >
                        {childItem.name}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.name} className="navItem">
                  <span onClick={() => handleNavigation(item.path)}>
                    {item.name}
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default CustomHeader;
