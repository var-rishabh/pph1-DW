import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'

const CalenderModal = ({open , setOpen}) => {
    return (
        <ModalContainer open={open} setOpen={setOpen}>
            <div>CalenderModal</div>
        </ModalContainer>
    )
}

export default CalenderModal;