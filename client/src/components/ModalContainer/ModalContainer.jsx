import React from 'react';
import './ModalContainer.css';
import { toast } from 'react-toastify';

const ModalContainer = (props) => {
  const handleClose = () => {
    if (!props.lock) {
      props.setOpen(false);
    } else {
      toast.error('Please complete the process first');
    }
  }
  return (
    <div className={`modal-container ${props.open ? 'show' : ''}`}>
      <div className='modal'>
        <div className='modal__close' onClick={handleClose}> &times; </div>
        {props.children}
      </div>
    </div>
  )
}

export default ModalContainer