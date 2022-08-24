import styled from 'styled-components';

export const ImageItem = styled.li`
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  overflow: hidden;

  & > div {
    height: 218px;
    width: 100%;

    & > img {
      transition: transform 450ms ease-in-out;
    }
  }

  &:hover > img {
    transform: scale(1.1);
  }
`;
