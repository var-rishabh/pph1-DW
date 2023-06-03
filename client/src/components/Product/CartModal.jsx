import React, { useEffect, useState } from 'react'
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch, useSelector } from 'react-redux';
import './CartModal.css';

const CartModal = ({ open, setOpen, product}) => {
    const { loading } = useSelector(state => state.cartReducer);
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState("buy");
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log("submitHandler");
    }

    const handleAmountChange = (e) => {
        if (e.target.value.match("^\\d*$") != null) {
            setAmount(e.target.value);
        }
    }

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
                                    <option value="try">Try</option>
                                </select>
                            </div>

                            <div className="cart-modal__body--input">
                                <label htmlFor="amount">Enter {type === "buy" ? "Amount" : "Months"}</label>
                                <div className="cart-modal__body--input--amount">
                                    <button type="button" onClick={() => (amount >=1 ) && setAmount(amount - 1)}>-</button>
                                    <input type="text" name="amount" id="amount" value={amount} onChange={handleAmountChange} />
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