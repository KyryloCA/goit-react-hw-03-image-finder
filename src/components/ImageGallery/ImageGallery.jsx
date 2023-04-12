import {api} from "../../api/Api"
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

import React, { Component } from 'react'
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import Loader from '../Loader/Loader'; 
import css from './ImageGallery.module.css';

 class ImageGallery extends Component {
//this.props.searchWord
state={
  itemsArray:[],
  pageCounter:1,
  loading: false,
  modalContent: null,
}

addPage = () => {
  this.setState((prevState) => {
    
    return { pageCounter: prevState.pageCounter + 1 };
  });
}

pushItemsArray=(arr)=>{
  this.setState((prevState) => {
    return { itemsArray: [...prevState.itemsArray, ...arr] };
  });
}



displayModal = ({ link, desc }) => {

  this.setState({ modalContent: { link, desc } });

}

closeModal = () => {
  // Clear the modal content from state
  this.setState({ modalContent: null });
}
componentDidMount() {
  window.addEventListener('keydown', this.handleKeyDown);
}

componentWillUnmount() {
  window.removeEventListener('keydown', this.handleKeyDown);
}

handleKeyDown = (event) => {
  if (event.key === 'Escape') {
    this.closeModal();
  }
};

componentDidUpdate(prevProps, prevState){
  if(prevProps.searchWord !== this.props.searchWord){
    this.setState({ itemsArray: [], pageCounter: 1 });
    
  }
  if(prevProps.searchWord !== this.props.searchWord || prevState.pageCounter !== this.state.pageCounter){
    this.setState({ loading: true }); 
    api(this.props.searchWord, this.state.pageCounter)
      .then((arr) => {
        this.pushItemsArray(arr);
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }
  console.log('state page:', this.state.pageCounter)
}

  render() {
    
    return (
      <>
      <ul className={css.ImageGallery}>
        {this.state.itemsArray.length>0 && this.state.itemsArray.map((el)=>(
          <ImageGalleryItem key={el.id} src={el.webformatURL} desc={el.id} largeImageURL={el.largeImageURL} displayModal={this.displayModal}/>
        ))}
        
      </ul>
      {this.state.loading && <Loader />}
      {this.props.searchWord && this.state.itemsArray.length>0 && <Button addPage={this.addPage} />}
      {this.state.modalContent && ( 
        <Modal
          link={this.state.modalContent.link}
          alt={this.state.modalContent.desc}
          closeModal={this.closeModal} 
        />
      )}
      </>
    )
  }
}


export default ImageGallery