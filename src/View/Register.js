import React, {useState, useEffect, useRef} from 'react';
import './Login.css';

// import {useDispatch, useSelector} from 'react-redux';
import { withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import logo from "../static/Image/logo3.jpg";

const Register = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    // const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth);

    // const captcha = useRef(null);
    const [captchaValid, setCaptchaValid] = useState(null);

    const onSubmitHandler = (e) => {

        if (email === '' || password === ''){
            setMsg('please enter all fields')
        }
        // else if (!validator.isEmail(email)){
        //     setMsg('Please enter valid email in the user field')
        // }
        else{
            e.preventDefault();

            const user = {
                email,
                password
            };
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


    // const onChange = () =>{
    //     // console.log('captcha value:', captcha.current.getValue())

    //     if(captcha.current.getValue())
    //     {
    //         // console.log('captcha has value')
    //         setCaptchaValid(true);
    //     }
    // }

    // useEffect(()=>{
    //     // console.log('use effect in Login page');

    //     if (auth.isAuthenticated) 
    //     {
    //         console.log('Authenticated');   
    //         // dispatch(clearErrors());
    //         // return <Redirect to="/product"/>;
    //         props.history.push('/');
    //     }
    //     else{
    //         const {error} = props;
    //         // console.log(error);
    //         // console.log('not authenticated');
    //         if (error.id === 'LOGIN_FAIL') {
    //             setMsg(error.msg.msg);
    //             console.log("error:", error);
    //             console.log("error msg", error.msg.msg);
    //             console.log(error.msg.msg);

    //         } else {
    //             setMsg(null);
    //         }
    //     }
    // }, [dispatch, props, auth]);

    return (
    <div className="fullpageContainer">
        {/* <div style={{margin:"10px"}}><Link to='/'><img src={logo} className="image-svg" alt="logo" /> 
        </Link></div> */}

        <div className="loginbox">
            <div style={{fontWeight:700, fontSize:"18px"}}>Register</div>
                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="text" name="Email" id="Email" onChange={(e) => {handleChangeEmail(e)}} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" onChange={(e) => {handleChangePassword(e)}} />
                </div>
                
                <div className="checkOutBtn"><button type='submit' onClick={(e) => onSubmitHandler(e)}>Submit</button></div>
                
                <div>
                    {/* <ReCAPTCHA
                        ref={captcha}
                        sitekey="6LdZ5GAcAAAAANdQ3CqW4dLxz2wVgMv-U2_ptepc"
                        onChange={onChange}    
                    /> */}
                </div>
                {/* {captchaValid === false && <div className="danger">Please verify you are not a robot.</div>} */}
                
                {msg?<div className="danger">{msg}</div>: <div></div>}
        </div>

        <div id="logEnd">
            <div style={{marginTop:"10px"}}>© HK Car Rental, 2023. All Rights Reserved</div>
        </div>

    </div>
    )
}
export default Register;
