import React from 'react';
import { LoadMore } from './Button.styled';

export const Button = ({ children, loadMore }) => {
  return (
    <LoadMore type="button" onClick={loadMore}>
      {children}
    </LoadMore>
  );
};
