import React from 'react';
import { ImageItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImage, tag }) => {
  return (
    <ImageItem>
      <img src={smallImage} alt={tag} />
    </ImageItem>
  );
};
