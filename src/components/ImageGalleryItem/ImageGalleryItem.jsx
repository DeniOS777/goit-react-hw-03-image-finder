import React from 'react';

export const ImageGalleryItem = ({ smallImage, tag }) => {
  return (
    <li>
      <img src={smallImage} alt={tag} />
    </li>
  );
};
