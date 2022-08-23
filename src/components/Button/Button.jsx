import React from 'react';
import { LoadMore } from './Button.styled';

export const Button = ({ children, onClick, ...allyProps }) => {
  return (
    <LoadMore type="button" onClick={onClick} {...allyProps}>
      {children}
    </LoadMore>
  );
};
