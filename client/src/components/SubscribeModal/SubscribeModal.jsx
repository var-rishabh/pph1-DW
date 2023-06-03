import React, { useEffect, useState } from 'react'
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch, useSelector } from 'react-redux';
import './SubscribeModal.css';

const SubscribeModal = ({ open, setOpen, product}) => {
    const { loading } = useSelector(state => state.cartReducer);
    const [amount, setAmount] = useState(0);
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
                <div className="subscribe-modal">
                    <div className="subscribe-modal__header">
                        Subscribe {product.title}
                    </div>
                    <div className="subscribe-modal__body">
                        <form onSubmit={submitHandler}>
                            <div className="subscribe-modal__body--input">
                                <label htmlFor="amount">Enter Months</label>
                                <div className="subscribe-modal__body--input--amount">
                                    <button type="button" onClick={() => (amount >=1 ) && setAmount(amount - 1)}>-</button>
                                    <input type="text" name="amount" id="amount" value={amount} onChange={handleAmountChange} />
                                    <button type="button" onClick={() => setAmount(amount + 1)}>+</button>
                                </div>
                            </div>
                            <button type="submit" className="subscribe-modal__body--button">Subscribe</button>
                        </form>
                    </div>
                </div>
            }
        </ModalContainer>

    )
}

export default SubscribeModal;