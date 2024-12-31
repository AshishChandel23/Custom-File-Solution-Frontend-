import React, { useState } from 'react'
import Login from './login';
import Register from './register';
import './auth.css';
import Header from '../layout/header/header';
import authImage from '../../assets/images/authImage.png';
const Auth = () => {
    const [showAuth, setShowAuth] = useState(true);
  return (
    <React.Fragment>
        <Header/>
        <div className="auth-container d-flex flex-wrap authUpperContainer">
          <div className="col-lg-6 col-md-6 d-none d-md-flex justify-content-center align-items-center imageBox">
            <div className="sideAuthImage">
              <img src={authImage} alt="" className="authImage img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            {showAuth ? (
              <Login setShowAuth={setShowAuth} />
            ) : (
              <Register setShowAuth={setShowAuth} />
            )}
          </div>
        </div>
    </React.Fragment>
  )
}

export default Auth
