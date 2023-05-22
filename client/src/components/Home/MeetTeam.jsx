import React from 'react';
import './MeetTeam.css';
import home3 from '../../Assets/home3.png';
import profileSample from '../../Assets/profileSample.jpg';
const MeetTeam = () => {
    return (
        <div className='meet-team'>
            <div className='meet-team__description'>
                <div className='meet-team__description--title'>
                    Meet Our Team
                </div>
                <div className='meet-team__description--text'>
                    It’s at the farm, in the store and on your table. Dairy is feeding people today for whatever comes tomorrow.
                </div>
            </div>
            <div className='meet-team__image'>
                <img src={home3} alt='home3' />
            </div>
            <div className='meet-team__members'>
                <div className='meet-team__members--member'>
                    <img src={profileSample} alt='profileSample' />
                </div>
                <div className='meet-team__members--member'>
                    <img src={profileSample} alt='profileSample' />
                </div>
                <div className='meet-team__members--member'>
                    <img src={profileSample} alt='profileSample' />
                </div>
                <div className='meet-team__members--member'>
                    <img src={profileSample} alt='profileSample' />
                </div>
            </div>
        </div>
    )
}

export default MeetTeam
