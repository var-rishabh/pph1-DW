import React from 'react';
import './SideBar.css';
import Call from '../../Assets/Call.svg';
import cart from '../../Assets/cartMain.svg';
import Whatsapp from '../../Assets/Whatsapp.svg';
import Links from '../../config/Links';

const SideBar = () => {
    const handleCall = () => {
        window.open(Links.Call);
    }
    const handleWhatsapp = () => {
        window.open(Links.Whatsapp);
    }
    const handleCart = () => {
        window.location.href = '/checkout';
    }
    return (
        <div className='side-bar'>
            <div className='side-bar__item' onClick={handleCall} >
                <div className='side-bar__item--icon'>
                    <img src={Call} alt='Call' />
                </div>
                <div className='side-bar__item--text'>
                    Call Us
                </div>
            </div>
            <div className='side-bar__item' onClick={handleWhatsapp}>
                <div className='side-bar__item--icon'>
                    <img src={Whatsapp} alt="Whatsapp" />
                </div>
                <div className='side-bar__item--text'>
                    Whatsapp
                </div>
            </div>
            <div className='side-bar__item' onClick={handleCart}>
                <div className='side-bar__item--icon'>
                    <img src={cart} alt="cart"/>
                </div>
                <div className='side-bar__item--text'>
                    Order Now
                </div>
            </div>
        </div>
    )
}

export default SideBar;
