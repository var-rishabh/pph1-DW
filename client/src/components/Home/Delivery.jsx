import React from 'react'
import home2 from '../../Assets/home2.png';
import './Delivery.css';
const Delivery = () => {
    return (
        <div className="delivery">
            <div className="delivery__container">
                <div className="delivery__container--content">
                    <div className="delivery__container--title">
                        Door Step Your life Delivery
                    </div>
                    <div className="delivery__container--description">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                        atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                    </div>
                    <div className="delivery__container--button">
                        <a href="/trail">Book Trail</a>
                    </div>
                </div>
                <div className="delivery__container--image">
                    <img src={home2} alt="home2" />
                </div>
            </div>
        </div>
    )
}

export default Delivery
