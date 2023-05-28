import React from 'react';
import cart from '../../Assets/Icons/Cart.svg';
import './ProductCard.css';

const ProductCard = ({ image, description, title, _id }) => {
    const handleOrder = () => {
        window.location.href = `/product/${_id}`;
    }

    const handleCart = () => {
        console.log("Cart" + _id);
    }

    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={image} alt={title} />
            </div>
            <div className="product-card__content">
                <div className="product-card__content--title">
                    {title}
                </div>
                <div className="product-card__content--description">
                    {description}
                </div>
                <div className="product-card__content--buttons">
                    <div className="product-card__content--order" onClick={handleOrder}>
                        Order Now
                    </div>
                    <div className="product-card__content--cart" onClick={handleCart}>
                        <img src={cart} alt="cart" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
