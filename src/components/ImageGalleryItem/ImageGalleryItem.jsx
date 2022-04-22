import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => {
  const { webformatURL, tags, largeImageURL } = image;
  return (
    <li className={s.imageGalleryItem} onClick={onImageClick}>
      <img
        className={s.image}
        src={webformatURL}
        alt={tags}
        data-src={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
