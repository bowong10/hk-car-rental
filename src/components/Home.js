import React from 'react'
import banner1 from '../static/Image/main.jpg'
import { useState } from 'react';

import {Link} from 'react-router-dom';
import CustomInput from '../components/CustomInput';


function Home() {

    const [checked, setChecked] = useState(true);


    return (
    <div className='container'>
        <div id='cover'>
            <picture>
                <source srcSet={banner1} sizes="100vw" media="(min-width: 1200px)" />
                <source srcSet={banner1} sizes="100vw" media="(min-width: 600px)" />
                <img className="test-img" src={banner1} />
            </picture>
            <div className='innerContent'>
                <div className='formContent cflex'>
                    <div className="titletxt">Hong Kong Car Rental HleoS</div>
                    <div><Link to="/Car">HleoS</Link></div>
                    <div className="titletxt">
                        <label>
                            Drop off in same location 
                            <input style={{marginLeft:"0.5em"}} type='checkbox' value={checked} onClick={(e)=>setChecked(!e.target.value)} />
                        </label>
                    </div>
                    <div className='rflex inputForm'>
                            
                        <div><input type='text' /></div>
                        <CustomInput icon="date" txt="Pick-up date" val="a"/>
                        <CustomInput icon="time" txt="Time" val="b"/>
                        <CustomInput icon="date" txt="Drop-off date" val="c" />
                        <CustomInput icon="time" txt="Time" val="d" />
                        <div><Link to="/Car"><button className='submitBtn'>Search</button></Link></div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Home