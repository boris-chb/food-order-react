import React from 'react';
import ReactDOM from 'react-dom';

import classes from './styles/Modal.module.css';

const overlays = document.getElementById('overlays');

const Backdrop = (props) => {
  const { onClose } = props;
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const { onClose } = props;
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, overlays)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlays
      )}
    </>
  );
};

export default Modal;
