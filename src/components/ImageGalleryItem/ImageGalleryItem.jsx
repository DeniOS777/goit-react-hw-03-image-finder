import React, { Component } from 'react';
import { ImageItem } from './ImageGalleryItem.styled';
import { Modal } from '../Modal';

export class ImageGalleryItem extends Component {
  state = {
    isShow: false,
  };

  toggleModal = () =>
    this.setState(prevState => ({ isShow: !prevState.isShow }));

  render() {
    const { isShow } = this.state;
    const { smallImage, largeImage, tag } = this.props;

    return (
      <ImageItem>
        <img onClick={this.toggleModal} src={smallImage} alt={tag} />
        {isShow && (
          <Modal largeImage={largeImage} tag={tag} onClose={this.toggleModal} />
        )}
      </ImageItem>
    );
  }
}
