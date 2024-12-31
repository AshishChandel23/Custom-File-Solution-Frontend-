import './footer.css';
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} FileBucket. All rights reserved.</p>
        <p>
          Made with <span className="heart">&hearts;</span> for seamless file management.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
