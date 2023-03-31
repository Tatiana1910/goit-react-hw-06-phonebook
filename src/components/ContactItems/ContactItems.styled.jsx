import styled from 'styled-components';

export const Items = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 40px;
  padding: 5px;
  font-size: 16px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgb(38, 153, 15);
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  background-color: #094b07;
  border-radius: 8px;
  border: 1px solid rgb(26, 103, 11);

  transform: scale(1);
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`;
