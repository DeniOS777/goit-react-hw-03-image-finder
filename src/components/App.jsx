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
  };

  componentDidMount() {}

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    console.log('prevQuery', prevState.query);
    console.log('nextQuery', this.state.query);

    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      console.log('Fetch images');
      const images = await API.getImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    }
  }

  searchImages = query => {
    if (!query) {
      return console.log('Enter search word');
    }
    this.setState({ query, page: 1, images: [] });
  };

  loadMore = () => this.setState(prevState => ({ page: prevState.page + 1 }));

  render() {
    const { images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.searchImages} />
        <ImageGallery items={images} />

        {images.length > 0 && (
          <Button loadMore={this.loadMore}>Load more</Button>
        )}
        <GlobalStyle />
      </div>
    );
  }
}

// searchImages = async query => {
//   const { page } = this.state;

//   try {
//     if (!query) {
//       return console.log('Enter search word');
//     }
//     const images = await API.getImages(query, page);
//     console.log(images);
//     this.setState(prevState => ({
//       images: [...prevState.images, ...images],
//       page: page + 1,
//       query,
//     }));
//   } catch (error) {
//     console.log(error.message);
//   }
// };
