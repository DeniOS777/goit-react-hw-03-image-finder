import React, { Component } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { GlobalStyle } from './GlobalStyle';

// import { Loader } from './Loader';

// import { Modal } from './Modal';

export class App extends Component {
  state = {
    largeImageURL: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div>
        <Searchbar onSubmit={console.log} />
        <ImageGallery items={[1, 2, 3, 4, 5]} />

        <Button>Load more</Button>
        <GlobalStyle />
      </div>
    );
  }
}
