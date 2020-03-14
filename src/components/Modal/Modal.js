import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ children, closeModalHandler, error }) => {

  return (
    <>
      <Backdrop className="backdrop backdrop__modal" clicked={closeModalHandler} />
      <div className="modal">
        {!error && <button className="btn modal__btn-close" onClick={closeModalHandler}>+</button>}
        {children}
      </div>
    </>
  );
}

export default Modal;