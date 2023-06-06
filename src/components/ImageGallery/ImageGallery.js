import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from "./ImageGallery.module.css";
import PropTypes from 'prop-types';

function ImageGallery({ items }) {
  return (
    <>
      <ul className={css.gallery}>
        {items.map(item => (
          <ImageGalleryItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  items: PropTypes.array,
};
