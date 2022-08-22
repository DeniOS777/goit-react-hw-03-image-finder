import styled from 'styled-components';

export const ImageItem = styled.li`
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
