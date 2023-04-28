import React from 'react';
import TestimonialMessage from './TestimonialMessage';
import profileSample from '../../Assets/profileSample.jpg';
import './Testimonial.css';
const Testimonial = () => {
    return (
        <div className='testimonial'>
            <div className='testimonial__title'>
                Testimonial
            </div>
            <div className='testimonial__text'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            </div>
            <div className='testimonial__messages'>
                <div className='testimonial__messages--one'>
                    <TestimonialMessage
                        image={profileSample}
                        text={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem "}
                    />
                </div>
                <div className='testimonial__messages--two'>
                    <TestimonialMessage
                        image={profileSample}
                        text={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem "}
                    />
                </div>
                <div className='testimonial__messages--three'>
                    <TestimonialMessage
                        image={profileSample}
                        text={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem "}
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonial;
