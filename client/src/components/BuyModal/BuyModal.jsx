import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'

const BuyModal = ({open , setOpen}) => {
    return (
        <ModalContainer open={open} setOpen={setOpen}>
            <div>BuyModal</div>
        </ModalContainer>
    )
}

export default BuyModal;