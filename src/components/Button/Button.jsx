import React from 'react';
import { LoadMore } from './Button.styled';

export const Button = ({ children, onLoadMore }) => {
  return (
    <LoadMore type="button" onClick={onLoadMore}>
      {children}
    </LoadMore>
  );
};
