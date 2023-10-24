import './Headbar.css';
import logo from "../static/Image/logo3.jpg";
import {Link} from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import { BiRightArrow, BiSolidUserDetail } from 'react-icons/bi'
import { FaLanguage } from 'react-icons/fa'

const Headbar = () => {

    return (
            <div className="header-grey">
                <div className="inner90">
                    <div className="septor">
                        <div style={{marginRight:"2em"}}>
                            <Link to="/"><img className="fixheight" src={logo} onClick={() => {}} alt=""></img></Link>
                        </div>
                        {/* <div style={{display:"flex", alignContent:"center", alignItems:"center"}}><input style={{marginRight:"1em"}} type="text" /> <BsSearch style={{color:'black', cursor:'pointer'}}/></div> */}
                            
                        <div className="push right headbar">
                           <FaLanguage style={{fontSize:"25px", marginRight:"10px"}}/>
                           <Link to="/Login"><BiSolidUserDetail style={{fontSize:"25px", color:"black", marginRight:"10px"}}/></Link>
                           <Link to="/Booking"><button className='bookingBtn'>Manage Booking</button></Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Headbar;
