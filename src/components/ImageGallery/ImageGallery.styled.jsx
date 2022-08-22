import styled from 'styled-components';

export const ImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  margin-bottom: 15px;
  padding-left: 8px;
  padding-right: 8px;
`;
