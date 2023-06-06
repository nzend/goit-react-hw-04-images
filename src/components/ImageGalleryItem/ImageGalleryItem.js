import css from "./ImageGalleryItem.module.css";
import Modal from '../Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    shownModal: false,
  };
  onModal = () => {
    this.setState(({ shownModal }) => ({ shownModal: !shownModal }));
  };
  render() {
    const { item } = this.props;
    const { webformatURL } = item;
    return (
      <li className={css.gallery__item}>
        <img
          onClick={this.onModal}
          className={css.gallery__item__image}
          src={webformatURL}
          alt="img"
        />
        {this.state.shownModal && <Modal onClose={this.onModal} image={item} />}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default ImageGalleryItem;
