import React from 'react'
import "./HeaderSub.css";
import Links from '../../config/Links';
const HeaderSub = () => {
  return (
    <div className="header-sub">
      <div className='header-sub__left'>
        <div className='header-sub__left--text'>8287228020</div>
        <div className='header-sub__left--text'>Support@apnadoodhwala.com</div>
      </div>
      <div className='header-sub__right'>
        <div className='header-sub__right--text'>Stay In Touch</div>
        <div className='header-sub__right--icons'>
          <a href={Links.facebook}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1648 5.86694C8.05933 5.86694 5.55444 8.37183 5.55444 11.4773C5.55444 14.5828 8.05933 17.0876 11.1648 17.0876C14.2703 17.0876 16.7751 14.5828 16.7751 11.4773C16.7751 8.37183 14.2703 5.86694 11.1648 5.86694ZM11.1648 15.1248C9.15796 15.1248 7.51733 13.489 7.51733 11.4773C7.51733 9.46558 9.15308 7.82983 11.1648 7.82983C13.1765 7.82983 14.8123 9.46558 14.8123 11.4773C14.8123 13.489 13.1716 15.1248 11.1648 15.1248ZM18.3132 5.63745C18.3132 6.36499 17.7273 6.94605 17.0046 6.94605C16.2771 6.94605 15.696 6.36011 15.696 5.63745C15.696 4.91479 16.282 4.32886 17.0046 4.32886C17.7273 4.32886 18.3132 4.91479 18.3132 5.63745ZM22.0291 6.96558C21.946 5.21265 21.5457 3.65991 20.2615 2.38062C18.9822 1.10132 17.4294 0.700928 15.6765 0.613037C13.8699 0.510498 8.45483 0.510498 6.64819 0.613037C4.90015 0.696045 3.34741 1.09644 2.06323 2.37573C0.779053 3.65503 0.383545 5.20776 0.295654 6.96069C0.193115 8.76733 0.193115 14.1824 0.295654 15.989C0.378662 17.7419 0.779053 19.2947 2.06323 20.574C3.34741 21.8533 4.89526 22.2537 6.64819 22.3416C8.45483 22.4441 13.8699 22.4441 15.6765 22.3416C17.4294 22.2585 18.9822 21.8582 20.2615 20.574C21.5408 19.2947 21.9412 17.7419 22.0291 15.989C22.1316 14.1824 22.1316 8.77222 22.0291 6.96558ZM19.6951 17.9275C19.3142 18.8845 18.5769 19.6218 17.615 20.0076C16.1746 20.5789 12.7566 20.447 11.1648 20.447C9.573 20.447 6.15015 20.574 4.7146 20.0076C3.75757 19.6267 3.02026 18.8894 2.63452 17.9275C2.06323 16.4871 2.19507 13.0691 2.19507 11.4773C2.19507 9.8855 2.06812 6.46265 2.63452 5.0271C3.01538 4.07007 3.75269 3.33276 4.7146 2.94702C6.15503 2.37573 9.573 2.50757 11.1648 2.50757C12.7566 2.50757 16.1794 2.38061 17.615 2.94702C18.572 3.32788 19.3093 4.06519 19.6951 5.0271C20.2664 6.46753 20.1345 9.8855 20.1345 11.4773C20.1345 13.0691 20.2664 16.4919 19.6951 17.9275Z" fill="white" />
            </svg>
          </a>
          <a href={Links.instagram}>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.2188 12.6455C24.2188 5.95605 18.7988 0.536133 12.1094 0.536133C5.41992 0.536133 0 5.95605 0 12.6455C0 18.6895 4.42822 23.6992 10.2173 24.6084V16.146H7.14111V12.6455H10.2173V9.97754C10.2173 6.94287 12.0239 5.2666 14.791 5.2666C16.1162 5.2666 17.502 5.50293 17.502 5.50293V8.48145H15.9746C14.4707 8.48145 14.0015 9.41504 14.0015 10.3726V12.6455H17.3599L16.8228 16.146H14.0015V24.6084C19.7905 23.6992 24.2188 18.6895 24.2188 12.6455Z" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeaderSub;