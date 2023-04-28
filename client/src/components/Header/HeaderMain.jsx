import React from 'react'
import "./HeaderMain.css";
import Icon from "../../Assets/Icon.png";
import profileSample from "../../Assets/profileSample.jpg";

const HeaderMain = () => {
  return (
    <>
    <div className="header-main">
      <div className="header-main__icon">
        <img src={Icon} alt="icon" onClick={() => window.location.href = '/'} />
      </div>
      <div className="header-main__menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/process">Process</a>
          </li>
        </ul>
      </div>
      <div className="header-main__profile">
        <a href="/trail" className='header-main__profile--trail'>Book Trail</a>
        <a href="/profile">
          <img src={profileSample} alt="profile" />
        </a>
      </div>
    </div>
    {/* Cover the space taken by header */}
    <div className="header-main__cover"></div>
    </>
  );
}

export default HeaderMain;