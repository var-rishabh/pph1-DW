import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'

const TryModal = ({open , setOpen}) => {
    return (
        <ModalContainer open={open} setOpen={setOpen}>
            <div>TryModal</div>
        </ModalContainer>
    )
}

export default TryModal;