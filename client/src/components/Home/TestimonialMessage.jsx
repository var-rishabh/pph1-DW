import React from 'react';
import './TestimonialMessage.css';

const TestimonialMessage = ({image, text}) => {
  return (
    <div className='testimonial-message'>
        <div className='testimonial-message__text'>
            {text}
        </div>
        <div className='testimonial-message__image'>
            <img src={image} alt='profile'/>
        </div>

    </div>
  )
}

export default TestimonialMessage
