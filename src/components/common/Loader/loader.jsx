import React from 'react';
import './Loader.css'; 
import loaderGif from '../../../assets/images/spinner.gif'; 

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={loaderGif} alt="Loading..." className="loader-image" />
    </div>
  );
};

export default Loader;
