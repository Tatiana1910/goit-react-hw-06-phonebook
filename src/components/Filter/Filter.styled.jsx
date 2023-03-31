import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 288px;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 300px;
  height: 40px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid rgb(26, 103, 11);

  transition: border 250ms ease-out;
  &:hover,
  &:focus-visible {
    border: 3px solid rgb(26, 103, 11);
  }
`;
