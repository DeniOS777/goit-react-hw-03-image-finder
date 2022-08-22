import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  position: relative;
  padding: 7px 0;
  padding-left: 30px;
  width: 300px;
`;

export const Button = styled.button`
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 30px;
  height: 30px;
  color: ${p => p.theme.colors.mediumGrey};
  border-style: none;
  background-color: transparent;
  cursor: pointer;

  & > svg {
    fill: currentColor;
  }
`;
