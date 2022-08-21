import React from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem';

export const ImageGallery = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          smallImage={item.webformatURL}
          tag={item.tags}
        />
      ))}
    </ul>
  );
};
