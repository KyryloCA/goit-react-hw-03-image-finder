import React, { Component } from 'react'
import PropTypes from 'prop-types';
import css from './Modal.module.css';


class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  
  handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      this.props.closeModal();
    }
  };
 


  render(){
    return (this.props.modalState &&
      <div className={css.Overlay}>
    <div className={css.Modal}>
      <img src={this.props.link} alt={this.props.alt} onClick={this.props.closeModal}/>
    </div>
  </div>
    )
  }
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



