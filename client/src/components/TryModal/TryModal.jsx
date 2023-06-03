import React, { useEffect, useState } from 'react'
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch, useSelector } from 'react-redux';
import './TryModal.css';

const TryModal = ({ open, setOpen, product}) => {
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
                <div className="try-modal">
                    <div className="try-modal__header">
                        Try {product.title}
                    </div>
                    <div className="try-modal__body">
                        <form onSubmit={submitHandler}>
                            <div className="try-modal__body--input">
                                <label htmlFor="amount">Enter Months</label>
                                <div className="try-modal__body--input--amount">
                                    <button type="button" onClick={() => (amount >=1 ) && setAmount(amount - 1)}>-</button>
                                    <input type="text" name="amount" id="amount" value={amount} onChange={handleAmountChange} />
                                    <button type="button" onClick={() => setAmount(amount + 1)}>+</button>
                                </div>
                            </div>
                            <button type="submit" className="try-modal__body--button">Try</button>
                        </form>
                    </div>
                </div>
            }
        </ModalContainer>

    )
}

export default TryModal;