import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item }) => {
  const [isModalShow, setIsModalShow] = useState();
 
  const onModal = () => {
    setIsModalShow(isModalShow => (isModalShow = !isModalShow));
  };
  console.log(item);
  return (
    <li className={css.gallery__item}>
      <img
        onClick={onModal}
        className={css.gallery__item__image}
        src={item.webformatURL}
        alt="img"
      />
      {isModalShow && <Modal onClose={onModal} image={item} />}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object,
};

export default ImageGalleryItem;
