import React from 'react';
import "./Auth.css";
import authLogo from "../../Assets/authLogo.svg";
import { Outlet } from 'react-router-dom';
const Auth = () => {
  return (
    <div className='auth'>
      <div className='auth__left'>
        <Outlet/>
      </div>
      <div className='auth__right'>
        <img src={authLogo} alt='authLogo' />

        <div className='auth__right--text'>
          Get Quality Milk at Apna Doodhwala
          <br />
          Subscribe now!
        </div>
      </div>
    </div>
  )
}

export default Auth;