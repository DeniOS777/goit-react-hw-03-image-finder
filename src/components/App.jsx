import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import * as API from '../services';

import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isShowButton: true,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      const data = await API.getImages(query, page);
      console.log(data);

      if (data.totalHits === 0) {
        this.setState({ isLoading: false });
        return this.notFindedImagesNotification();
      }

      if (data.totalHits < 12 * page) {
        console.log('Hide load more');

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          isLoading: false,
          isShowButton: false,
        }));
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          isLoading: false,
        }));
      }
    }
  }

  handleSubmit = query => {
    if (!query) {
      return this.emptySearchFieldNotification();
    }
    this.setState({
      query,
      page: 1,
      images: [],
      isLoading: true,
      isShowButton: true,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  emptySearchFieldNotification = () => {
    toast.info('Please enter a keyword for search');
  };

  notFindedImagesNotification = () => {
    toast.warning('Whoops not finded images. Please enter correct keyword');
  };

  successFindedImages = count => {
    toast.success(`We finded ${count} images`);
  };

  render() {
    const { images, isLoading, isShowButton } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery items={images} />

        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && isShowButton && (
          <Button onClick={this.loadMoreImages}>Load more</Button>
        )}
        <GlobalStyle />
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}
