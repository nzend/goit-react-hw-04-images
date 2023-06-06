import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal__root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onOverlayClose = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props.image;
    return createPortal(
      <div onClick={this.onOverlayClose} className={css.modal__backdrop}>
        <div className={css.modal__content}>
          <img className={css.modal__img} src={largeImageURL} alt="img" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};
