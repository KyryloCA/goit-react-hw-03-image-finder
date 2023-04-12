import React from 'react'
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({src,desc,largeImageURL,displayModal}) => {
  // console.log('desc', desc)
  return (
    <li className={css.ImageGalleryItem}>
  <img className={css.ImageGalleryItemImage} src={src} alt={'image id:'+ desc} onClick={()=>{
    
displayModal({ link: largeImageURL, desc });
}}/>
</li>
  )
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  desc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  largeImageURL: PropTypes.string,
  displayModal: PropTypes.func,
};
export default ImageGalleryItem