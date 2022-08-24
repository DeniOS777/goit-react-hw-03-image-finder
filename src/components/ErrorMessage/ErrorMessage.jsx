import React from 'react';
import { Error } from './ErrorMessage.styled';

export const ErrorMessage = ({ text }) => {
  return <Error>{text}</Error>;
};
