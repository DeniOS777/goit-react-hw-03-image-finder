import React, { Component } from 'react';
import { Searchbar } from './Searchbar';
import * as API from '../services';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';

import { GlobalStyle } from './GlobalStyle';

// import { Modal } from './Modal';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    const prevQuery = prevState.query;
    const prevPage = prevState.page;
    const nextQuery = this.state.query;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      const data = await API.getImages(query, page);
      const images = data.hits;
      console.log(data);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        isLoading: false,
      }));
    }
  }

  handleSubmit = query => {
    if (!query) {
      return console.log('Enter search word');
    }
    this.setState({
      query,
      page: 1,
      images: [],
      isLoading: true,
    });
  };

  loadMoreImages = () =>
    this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));

  render() {
    const { images, isLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery items={images} />

        {isLoading && <Loader />}
        {images.length > 0 && (
          <Button loadMore={this.loadMoreImages}>Load more</Button>
        )}
        <GlobalStyle />
      </div>
    );
  }
}

// if (totalHits > perPage * page) {
//        500         12      40
// }
// 40 * 12 = 480
// 41 * 12 = 492
// 42 * 12 = 504 Ok
// 43 * 12 = error
