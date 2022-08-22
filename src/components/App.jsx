import React, { Component } from 'react';
import { Searchbar } from './Searchbar';
import * as API from '../services';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { GlobalStyle } from './GlobalStyle';

// import { Loader } from './Loader';

// import { Modal } from './Modal';

export class App extends Component {
  state = {
    images: [],
    largeImageURL: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  searchImages = async query => {
    try {
      if (!query) {
        return console.log('Enter search word');
      }
      const images = await API.getImages(query);
      console.log(images);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.searchImages} />
        <ImageGallery items={images} />

        {images.length > 0 && <Button> Load more</Button>}
        <GlobalStyle />
      </div>
    );
  }
}
