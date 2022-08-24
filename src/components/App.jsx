import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import * as API from '../services';

import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    isShowLoadMore: true,
    error: false,
  };

  perPage = 12;

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    try {
      if (prevState.query !== query || prevState.page !== page) {
        const data = await API.getImages(query, page);

        if (data.totalHits === 0) {
          this.setState({ isLoading: false });
          return this.notFindedImagesNotification();
        }

        if (prevState.page === page || prevState.query !== query) {
          this.successFindedImages(data.totalHits);
        }

        this.writeFindedImagesToState(data, page);
      }
    } catch (error) {
      this.setState({ isLoading: false, error: true });
      this.errorNotification(error);
    }
  }

  writeFindedImagesToState = (data, page) => {
    if (data.totalHits < this.perPage * page) {
      this.notLoadMoreImagesNotification();
      return this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        isLoading: !prevState.isLoading,
        isShowLoadMore: !prevState.isShowLoadMore,
      }));
    }
    return this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
      isLoading: !prevState.isLoading,
    }));
  };

  handleSubmit = query => {
    if (!query) {
      return this.emptySearchFieldNotification();
    }
    this.setState({
      query,
      page: 1,
      images: [],
      isLoading: true,
      isShowLoadMore: true,
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: !prevState.isLoading,
    }));
  };

  successFindedImages = count => {
    toast.success(`We finded ${count} images`);
  };

  emptySearchFieldNotification = () => {
    toast.info('Please enter a keyword for search');
  };

  notFindedImagesNotification = () => {
    toast.warning('Whoops not finded images. Please enter correct keyword');
  };

  notLoadMoreImagesNotification = () => {
    toast.info(
      'Sorry, you have uploaded all images with this keyword, please try another word'
    );
  };

  errorNotification = error => {
    toast.error(error.message);
  };

  render() {
    const { images, isLoading, isShowLoadMore, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery items={images} />

        {isLoading && <Loader />}

        {images.length > 0 && !isLoading && isShowLoadMore && (
          <Button onClick={this.loadMoreImages}>Load more</Button>
        )}

        {error ? <ErrorMessage text="Something went wrong😢" /> : null}
        <GlobalStyle />
        <ToastContainer autoClose={2500} />
      </>
    );
  }
}
