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
    query: '',
    page: 1,
    largeImageURL: '',
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  searchImages = async query => {
    const { page } = this.state;

    try {
      if (!query) {
        return console.log('Enter search word');
      }
      const images = await API.getImages(query, page);
      console.log(images);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: page + 1,
        query,
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { images, query } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.searchImages} />
        <ImageGallery items={images} />

        {images.length > 0 && (
          <Button onLoadMore={() => this.searchImages(query)}>
            {' '}
            Load more
          </Button>
        )}
        <GlobalStyle />
      </div>
    );
  }
}
