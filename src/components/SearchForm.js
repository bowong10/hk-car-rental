import { React, useState, useEffect } from 'react';
import CustomField from './CustomField'
import CustomTxtField from './CustomTxtField'
import {Link} from 'react-router-dom';

const SearchForm = ({checked, setChecked, show}) => {

    // console.log(show);

    return(
        <div id="SearchForm" style={{"display":show==true?"flex":"none"}}>
            <div className="loc" style={{"minWidth":"400px"}}>
                <CustomTxtField txt="Pick-up location" val="default location" show_element="true"/>
                {checked? null: <CustomTxtField txt="Drop-off location" val="default location2" show_element="true"/> }
            </div>
            <div className='control'>
                <CustomField icon="date" txt="Pick-up date" val="25 Oct 2323" />
                <CustomField icon="time" txt="Time" val="12:00"/>
            </div>
            <div className='control'>
                <CustomField icon="date" txt="Drop-off date" val="26 Oct 2323" />
                <CustomField icon="time" txt="Time" val="12:00"/>
            </div>
            <div style={{"display":"flex"}}><Link className="searchBtn" to="/Car"><button className='submitBtn'>Search</button></Link></div>
        </div>
    )
}

export default SearchForm