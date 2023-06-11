import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'

const VacationModal = ({open , setOpen}) => {
    return (
        <ModalContainer open={open} setOpen={setOpen}>
            <div>VacationModal</div>
        </ModalContainer>
    )
}

export default VacationModal;