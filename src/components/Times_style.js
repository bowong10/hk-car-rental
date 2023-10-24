import styled from 'styled-components';

export const StyledTimes = styled.button`

    // @media only screen and (min-width: 40em) {
    //     display: none;
    // }

  margin-left: 1.5em;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 1rem;
    height: 0.15rem;
    background: black;
    border-radius: 5px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.015rem;

    :first-child {
      transform: rotate(45deg);
    }

    :nth-child(2) {
        transform-origin:-0.04rem;
      transform: rotate(-45deg);
    }
  }
`;