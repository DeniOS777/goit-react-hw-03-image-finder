import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <ImageList>
      {items.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} smallImage={webformatURL} tag={tags} />
      ))}
    </ImageList>
  );
};
