import { StyledBurger } from './Burger_style';
import { bool, func } from 'prop-types';
import React from 'react';

const Burger = ({open, setOpen}) =>{
    return(
        <StyledBurger open={open} onClick={()=> setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
