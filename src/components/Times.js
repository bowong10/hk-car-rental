import { StyledTimes } from './Times_style';
// import { bool, func } from 'prop-types';
import React from 'react';

const Times = ({open, setOpen}) =>{
    return(
        <StyledTimes> 
        {/*   open={open} onClick={()=> setOpen(!open)}> */}
            <div></div>
            <div></div>
        </StyledTimes>
    );
};


export default Times;
