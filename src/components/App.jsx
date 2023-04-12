import React, { Component } from 'react'


import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import css from './App.module.css';




class App extends Component {
  state={
    searchWord:'',
  }

  onSubmit = (e)=>{
    e.preventDefault();
    
    this.setState({searchWord:e.target.searchWord.value.trim()})
  }

  render() {
    return (
      <div className={css.App}>
  <Searchbar onSubmit={this.onSubmit} searchWord={this.state.searchWord}/>
     <ImageGallery searchWord={this.state.searchWord}/>
       
         
           
            
    </div>
    )
  }
}

export {App};


