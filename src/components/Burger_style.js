import styled from 'styled-components';

export const StyledBurger = styled.button`

    @media only screen and (min-width: 50em) {
        display: none;
    }

  margin-left: 1.5em;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform-origin:31px;
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform-origin:31px;
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
  }
`;