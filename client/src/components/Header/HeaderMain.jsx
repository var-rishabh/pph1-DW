import React from 'react'
import "./HeaderMain.css";
import Icon from "../../Assets/Icon.png";
import profileSample from "../../Assets/profileSample.jpg";
import { useSelector } from 'react-redux';

const HeaderMain = () => {
  const { user, loading } = useSelector(state => state.userReducer);
  return (
    <>
      {/* Desktop Header */}
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
              <a href="/howwedo">How We Do</a>
            </li>
            <li>
              <a href="/whatwedo">What We Do</a>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/process">Process</a>
            </li>
          </ul>
        </div>
        <div className="header-main__profile">
          <a href="/trail" className='header-main__profile--button'>Book Trial</a>
          {loading ? (
            <div className="loaderButton">
              <div className="loader"></div>
            </div>
          ) : user ? (
            <a href="/profile">
              <img src={(user.photoUrl) ? (user.photoUrl) : (profileSample)} alt="profile" />
            </a>) : (
            <a href="/login" className='header-main__profile--button'>
              Login
            </a>)}
        </div>
      </div>
      {/* Cover the space taken by header */}
      <div className="header-main__cover"></div>

      {/* Mobile Header */}
      <div className="header-main__mobile">
        <div className="header-main__mobile--nav">
          <div className="header-main__mobile--icon">
            <img src={Icon} alt="icon" onClick={() => window.location.href = '/'} />
          </div>
          <div className="header-main__mobile--profile">
            {loading ? (
              <div className="loaderButton">
                <div className="loader"></div>
              </div>
            ) : user ? (
              <a href="/profile">
                <img src={(user.photoUrl) ? (user.photoUrl) : (profileSample)} alt="profile" />
              </a>) : (
              <a href="/login" className='header-main__mobile--profile--button'>
                Login
              </a>)}
          </div>
        </div>
        <div className="header-main__mobile--menu">
        </div>
      </div>

    </>
  );
}

export default HeaderMain;