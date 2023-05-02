import React from 'react';
import './HomeProductCard.css';

const HomeProductCard = ({ product }) => {
    const handleTry = () => {
        console.log('Try');
    }
    const handleBuy = () => {
        console.log('Buy');
    }
    const handleSubscribe = () => {
        console.log('Subscribe');
    }
    return (
        <div className='home-product-card'>
            <div className='home-product-card__image'>
                <img src={product.image} alt={product.name} />
            </div>
            <div className='home-product-card__main'>
                <div className='home-product-card__title'>
                    {product.title}
                </div>
                <div className='home-product-card__price'>
                    {product.price} ₹
                </div>
            </div>
            <div className='home-product-card__size'>
                {product.size}
            </div>
            <div className='home-product-card__buttons'>
                <button className='home-product-card__buttons--try' onClick={handleTry}>Try</button>
                <button className='home-product-card__buttons--buy' onClick={handleBuy}>Buy</button>
                <button className='home-product-card__buttons--subscribe' onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    )
}

export default HomeProductCard;
