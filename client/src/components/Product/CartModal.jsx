import React, { useEffect, useState } from 'react'
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch, useSelector } from 'react-redux';
import './CartModal.css';
import { addToCart } from '../../Actions/Cart';

const CartModal = ({ open, setOpen, product}) => {
    const { loading } = useSelector(state => state.cartReducer);
    const [type, setType] = useState("buy");
    const [amount, setAmount] = useState(1);
    const dispatch = useDispatch();
    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(addToCart(product._id, amount, type, setOpen));
    }

    const handleAmountChange = (e) => {
        if (e.target.value.match("^\\d*$") != null) {
            setAmount(e.target.value);
        }
    }

    useEffect(() => {
        if (type === "buy") {
            setAmount(1);
        } else if (type === "subscribe") {
            setAmount(parseInt(process.env.REACT_APP_SUB_MIN));
        } else {
            setAmount(parseInt(process.env.REACT_APP_TRY_MIN));
        }
    }, [type]);

    return (
        <ModalContainer open={open} setOpen={setOpen} lock={loading}>
            {loading ?
                <div className="loading"><div className='loading__circle'></div></div> :
                <div className="cart-modal">
                    <div className="cart-modal__header">
                        Add to Cart
                    </div>
                    <div className="cart-modal__body">
                        <form onSubmit={submitHandler}>
                            <div className="cart-modal__body--select">
                                <label htmlFor="amount">Select Type</label>
                                <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)}>
                                    <option value="buy">Buy</option>
                                    <option value="subscribe">Subscribe</option>
                                    <option value="trial">Try</option>
                                </select>
                            </div>

                            <div className="cart-modal__body--input">
                                <label htmlFor="amount">Enter {type === "buy" ? "Amount" : type ==="subscribe" ? "Months": "Days"}</label>
                                <div className="cart-modal__body--input--amount">
                                    <button type="button" onClick={() => (amount > 1 ) && setAmount(amount - 1)}>-</button>
                                    <input type="text" name="amount" id="amount" value={amount} onChange={handleAmountChange} disabled/>
                                    <button type="button" onClick={() => setAmount(amount + 1)}>+</button>
                                </div>
                            </div>
                            <button type="submit" className="cart-modal__body--button">Add</button>
                        </form>
                    </div>
                </div>
            }
        </ModalContainer>

    )
}

export default CartModal;