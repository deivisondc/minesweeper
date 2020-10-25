import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;
  background: rgb(200, 200, 200);
  border: solid 1px rgba(0, 0, 0, 0.2);
  box-shadow: 
    inset -2px -2px 0 rgba(0, 0, 0, 0.2),
    inset 2px 2px 0 rgba(255, 255, 255 , 0.5);

  :hover {
    background: rgb(220, 220, 220);
  }

  :active {
    box-shadow: 
      inset 2px 2px 0 rgba(0, 0, 0, 0.2),
      inset -2px -2px 0 rgba(255, 255, 255 , 0.5);
  }

  ${props => props.revealed && css`
    box-shadow: initial;
    background: rgb(220, 220, 220);

    :hover {
      background: rgb(220, 220, 220);
    }

    :active {
      box-shadow: initial;
    }
  `}
`;

export const Number = styled.span`
  font-family: monospace;
  font-weight: bold;
  font-size: 14px;

  &.cell-number-1 {
    color: blue;
  }

  &.cell-number-2 {
    color: green;
  }

  &.cell-number-3 {
    color: red;
  }

  &.cell-number-4 {
    color: navy;
  }

  &.cell-number-5 {
    color: darkred;
  }

  &.cell-number-6 {
    color: darkgreen;
  }

  &.cell-number-7 {
    color: darkblue;
  }

  &.cell-number-8 {
    color: gray;
  }

`;