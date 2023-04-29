import React from 'react';
import cart from '../../Assets/cart.svg';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, description, title, id }) => {
    const navigate = useNavigate();
    const handleOrder = () => {
        navigate(`/product/${id}`);
    }

    const handleCart = () => {
        console.log("Cart" + id);
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
