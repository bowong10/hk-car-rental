import { React, useState, useEffect } from 'react';
import '../App.css';

import CustomField from '../components/CustomField'
import CustomTxtField from '../components/CustomTxtField'

import {Link} from 'react-router-dom';

// import Headbar from '../components/Headbar';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../static/css/main.css';
import banner1 from '../static/Image/hk_pic.webp';
import SearchForm from '../components/SearchForm';

// import cleancar from '../static/Image/cleancar.png';
// import flexible from '../static/Image/flexible.png';
// import hiddenfee from '../static/Image/hiddenfee.png';
// import subscribe from '../static/Image/subscribe.png';
// import pricematch from '../static/Image/pricematch.png';
// import {Link} from 'react-router-dom';

// import CustomInput from '../components/CustomInput';

// import {MdTipsAndUpdates} from 'react-icons/md'

// import {MdCarRental} from 'react-icons/md'

const Home = () => {

    useEffect(() => {
        console.log("hommies")},[]
        );
    
    const [checked, setChecked] = useState(true);

    const handleCheck = () => {
        setChecked(!checked);
        console.log(checked);
    }

    return (
    <>
        <div className="content">
            <div className='container'>
                <div id='cover'>
                    <picture>
                        <source srcSet={banner1} sizes="100vw" media="(min-width: 1200px)" />
                        <source srcSet={banner1} sizes="100vw" media="(min-width: 600px)" />
                        <img className="test-img" src={banner1} />
                    </picture>
                    <div className='innerContent'>
                        <div className='formContent cflex'>
                            <div className="titletxt">Hong Kong Car Rental</div>
                            <div className="titletxt2">
                                <label>
                                    Drop off in same location &nbsp;
                                    <input type='checkbox' checked={checked} onChange={(e)=> handleCheck()} />
                                </label>
                            </div>
                            <SearchForm checked={checked} setChecked={setChecked} show={true} />
                        </div>
                    </div>
                </div>
            </div>



            <section>
                {/* <a href="/Products/JERSEY/NATIONAL%20TEAMS/SOUTH%20AMERICA/BRAZIL">
                    <picture>
                        <source media="(min-width:640px)" srcSet={banner2}></source>
                        <img id="b2" className="imgc"  src={banner2s} alt=""></img>
                    </picture>
                </a> */}
            </section>
            
            <section> 
                
                <div className="splitouter">
                    {/* <a href="/Products/JERSEY/CLUBS"><img src={rec1} alt="" /></a>
                    <a href="/Products/JERSEY/NATIONAL%20TEAMS"><img src={rec2} alt="" /></a>
                    <a href="/Products/NAMESET"><img src={rec3} alt="" /></a>
                    <a href="/Products/PATCH"><img src={rec4} alt="" /></a> */}
                </div>
            </section>
        </div> 
        <Footer/>
    </>
    );
};

export default Home
