import React, { useState } from "react";
import "./auth.css";
import apiRequest from "../../constants/ApiCall";
import Loader from "../common/Loader/loader";
import { toast } from "react-toastify";

const Register = ({setShowAuth}) => {
  const [loading, setLoading] = useState(false);
  const [userInfo , setUserInfo] = useState({name:"", email:"", contactNo:"", password:""});
  const changeHandler = (event)=>{
    setUserInfo(prev=>({...prev, [event.target.name]:event.target.value}));
  }
  const reset = ()=>{
      setUserInfo({name:"", email:"", contactNo:"", password:""});
  }
  const onRegister = async()=>{
      try {
          setLoading(true);
          const response = await apiRequest({
              url:'/api/v1/auth/register', 
              method:'POST',
              payload:userInfo,
          });
          reset();
          toast.success(response.data.message, {
                          position: "top-right",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                      });
          setShowAuth(true);
      } catch (error) {
          console.error("Register Error :;>", error.response.data.message);
          toast.error(error.response.data.message, {
                          position: "top-right",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                      });
      } finally{
          setLoading(false);
      }
  }
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Register</h2>
        <form className="auth-form">
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={(e)=>(changeHandler(e))}
            placeholder="Enter your name"
            className="auth-input"
          />
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={(e)=>(changeHandler(e))}
            placeholder="Enter your email"
            className="auth-input"
          />
          <input
            type="text"
            name="contactNo"
            value={userInfo.contactNo}
            onChange={(e)=>(changeHandler(e))}
            placeholder="Enter your contact number"
            className="auth-input"
          />
          <input
            type="password"
            name="password"
            value={userInfo.password}
            onChange={(e)=>(changeHandler(e))}
            placeholder="Create a password"
            className="auth-input"
          />
          <button type="button" className="auth-button" onClick={onRegister}>
            Register
          </button>
        </form>
        <p className="auth-footer">
          Already have an account?  <a href="#" onClick={()=>(setShowAuth(true))}>Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
