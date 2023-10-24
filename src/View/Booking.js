import React, {useState, useEffect, useRef} from 'react';
import './Booking.css';

// import {useDispatch, useSelector} from 'react-redux';
import { withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import logo from "../static/Image/logo3.jpg";

const Booking = () => {
    
    const [booking, setBooking] = useState('');
    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState(null);

    const handleChangeBooking = (e) => setBooking(e.target.value);
    const handleChangeUsername = (e) => setUsername(e.target.value);

    // const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth);

    // const captcha = useRef(null);
    // const [captchaValid, setCaptchaValid] = useState(null);

    const onSubmitHandler = (e) => {

        if (booking === '' || username === ''){
            setMsg('please enter all fields')
        }
        // else if (!validator.isEmail(email)){
        //     setMsg('Please enter valid email in the user field')
        // }
        else{
            e.preventDefault();

            // const user = {
            //     email,
            //     password
            // };
            setMsg(null)

            // if (captchaValid)
            // {
            //     // console.log('checked is not robot');
            //     dispatch(login(user));
            // }
            // else{
            //     // console.log('you have to take you are not robot')
            //     setCaptchaValid(false);
            // }
        }
    };

  return (
    <div className="fullpageContainer">
        {/* <div style={{margin:"10px"}}><Link to='/'><img src={logo} className="image-svg" alt="logo" /> 
        </Link></div> */}

        <div className="loginbox">
            <div style={{fontWeight:700, fontSize:"18px"}}>Enquiry</div>
                <div>
                    <label htmlFor="Booking">Booking Number</label>
                    <input type="text" name="Booking" id="Booking" onChange={(e) => {handleChangeBooking(e)}} />
                </div>
                <div>
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" id="username" onChange={(e) => {handleChangeUsername(e)}} />
                </div>
                
                <div className="checkOutBtn"><button type='submit' onClick={(e) => onSubmitHandler(e)}>Enquiry</button></div>
                
        </div>

        <div id="logEnd">
            <div style={{marginTop:"10px"}}>© HK Car Rental, 2023. All Rights Reserved</div>
        </div>

    </div>
  )
}

export default Booking