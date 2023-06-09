import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal__root');

const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  });

  const keyDown = evt => {
    if (evt.code === 'Escape') {
      onCloseModal();
    }
  };

  const onOverlayClose = evt => {
    if (evt.currentTarget === evt.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div onClick={onOverlayClose} className={css.modal__backdrop}>
      <div className={css.modal__content}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};
