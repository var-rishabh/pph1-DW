import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'

const SubscribeModal = ({open , setOpen}) => {
    return (
        <ModalContainer open={open} setOpen={setOpen}>
            <div>SubscribeModal</div>
        </ModalContainer>
    )
}

export default SubscribeModal;