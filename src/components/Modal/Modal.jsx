import React from 'react'
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({link,alt,closeModal}) => {
 
  return (
    <div className={css.Overlay}>
  <div className={css.Modal}>
    <img src={link} alt={alt} onClick={closeModal}/>
  </div>
</div>
  )
}

Modal.propTypes = {
  link: PropTypes.string.isRequired,
  alt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  closeModal: PropTypes.func.isRequired,
};

export default Modal