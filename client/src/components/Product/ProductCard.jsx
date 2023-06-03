import React from 'react';
import cart from '../../Assets/Icons/Cart.svg';
import './ProductCard.css';
import CartModal from './CartModal';
import trashSolid from '../../Assets/trash-solid.svg';
const ProductCard = ({ image, description, title, _id, type = "buy", quantity = 0 }) => {
    const [showCartModal, setShowCartModal] = React.useState(false);
    const handleOrder = () => {
        window.location.href = `/product/${_id}`;
    }
    const handleDelete = () => {
        console.log("delete");
    }

    return (
        <>
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
                    {quantity > 0 ?
                        <div className="product-card__content--item">
                            <div className="product-card__content--item-type">
                                Type: {type}
                            </div>
                            <div className="product-card__content--item-quantity">
                                {(type === "buy") ? "Quantity: " + quantity  : "Months: " + quantity }
                            </div>
                            <button className="product-card__content--item-button" onClick={handleDelete}>
                                <img src={trashSolid} alt="Delete" />
                            </button>
                        </div>
                        :
                        <div className="product-card__content--buttons">
                            <div className="product-card__content--order" onClick={handleOrder}>
                                Order Now
                            </div>
                            <div className="product-card__content--cart" onClick={() => setShowCartModal(true)}>
                                <img src={cart} alt="cart" />
                            </div>
                        </div>
                    }
                </div>
            </div>
            <CartModal open={showCartModal} setOpen={setShowCartModal} product={{ image, description, title, _id }} />
        </>
    )
}

export default ProductCard
