import React from 'react'
import TokenClient from '../../../constants/TokenClient';
import CustomHeader from './customHeader';

const Header = () => {
    const nonAuthHeaderNavItems = [
        { name: 'HOME', path: '/', child:null },
        { name: 'ABOUT', path: '/about', child:null },
        { name: 'USER', path: '/dashboard', child:null},
        { name: 'LOGOUT', path: '/dashboard/logout'},
      ];
    const authHeaderNavItems = [
        { name: 'HOME', path: '/', child:null},
        { name: 'ABOUT', path: '/about', child:null },
        { name: 'LOGIN / REGISTER', path: '/auth', child:null },
        { name: 'MEDIA', path: '#', child:null},
      ];
    const authData = TokenClient.getUserToken();
  return (
    <React.Fragment>
      {
        authData 
        ? (<CustomHeader menuItems={nonAuthHeaderNavItems} itsUser={true}/>) 
        : (<CustomHeader menuItems={authHeaderNavItems} itsUser={false}/>)
      }
    </React.Fragment>
  )
}

export default Header
