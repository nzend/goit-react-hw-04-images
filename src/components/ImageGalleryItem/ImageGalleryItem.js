import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item }) => {
  const [isModalShow, setIsModalShow] = useState(false);
 
  const onModal = () => {
    setIsModalShow(isModalShow => (isModalShow = !isModalShow));
  };
  
  return (
    <li className={css.gallery__item}>
      <img
        onClick={onModal}
        className={css.gallery__item__image}
        src={item.webformatURL}
        alt="img"
      />
     
      {isModalShow && (
        <Modal onCloseModal={onModal}>
          <img src={item.largeImageURL} alt="" />
        </Modal>
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default ImageGalleryItem;
