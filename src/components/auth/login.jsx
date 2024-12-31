import React, { useState } from "react";
import "./auth.css";
import apiRequest from "../../constants/ApiCall";
import useLocalStorage from "../../hooks/useLocalStrorage";
import { useNavigate } from "react-router-dom";
import Loader from "../common/Loader/loader";

const Login = ({setShowAuth}) => {
    const [loading, setLoading] = useState(false);
    const [userInfo , setUserInfo] = useState({email:"",password:""});
    const navigate = useNavigate();

    const changeHandler = (event)=>{
        setUserInfo(prev=>({...prev, [event.target.name]:event.target.value}));
    }
    const reset = ()=>{
        setUserInfo({email:"",password:""});
    }
    const onLogin = async()=>{
        try {
            setLoading(true);
            const response = await apiRequest({
                url:'/api/v1/auth/login', 
                method:'POST',
                payload:userInfo,
            });
            reset();
            useLocalStorage().setItem('user_token', response.data.token);
            useLocalStorage().setItem('accountId', response.data.accountId);
            navigate('/dashboard');
        } catch (error) {
            console.log("Login Error :;>", error);
        } finally{
            setLoading(false);
        }
    }
    if(loading){
        <Loader/>
    }
    else return (
        <div className="auth-container">
          <div className="auth-box">
            <h2 className="auth-title">Login</h2>
            <form className="auth-form">
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={(e)=>(changeHandler(e))}
                placeholder="Enter your email"
                className="auth-input"
              />
              <input
                type="password"
                name="password"
                value={userInfo.password}
                onChange={(e)=>(changeHandler(e))}
                placeholder="Enter your password"
                className="auth-input"
              />
              <button type="button" onClick={onLogin} className="auth-button">
                Login
              </button>
            </form>
            <p className="auth-footer">
              Don't have an account? <a href="#" onClick={()=>(setShowAuth(false))}>Register</a>
            </p>
          </div>
        </div>
      );
};

export default Login;
