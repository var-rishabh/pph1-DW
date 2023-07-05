import React from 'react';
import authLogo from "../../Assets/authLogo.svg";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <img src={authLogo} alt='authLogo' />

      <div className='dashboard--text'>
        Welcome to Apna Doodhwala Admin Panel
        <br />
        We are happy to see you here!
      </div>
    </div>
  )
}

export default Dashboard;
