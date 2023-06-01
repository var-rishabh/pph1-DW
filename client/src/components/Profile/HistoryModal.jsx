import React from 'react'
import ModalContainer from '../ModalContainer/ModalContainer'

const HistoryModal = ({open , setOpen}) => {
    return (
        <ModalContainer open={open} setOpen={setOpen}>
            <div>HistoryModal</div>
        </ModalContainer>
    )
}

export default HistoryModal;