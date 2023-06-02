import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'

const CartModal = ({open , setOpen}) => {
    return (
        <ModalContainer open={open} setOpen={setOpen}>
            <div>CartModal</div>
        </ModalContainer>
    )
}

export default CartModal;