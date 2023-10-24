import './Sidebar.css';
import {Link} from 'react-router-dom';
// import { set } from 'mongoose';

const Sidebar = ({open, setOpen}) => {

    const sideBarClass=["sidebar"];

    if(open){
        sideBarClass.push("show");
    }

    return  true && 
            <div id="sidebar" className={open? "sidebar show": "sidebar Hide"}>
                <div style={{height:"60px", border:"0"}}></div> 
                <div style={{height:"51px"}}></div> 
                <div onClick={()=> setOpen(!open)}><Link to="/">NEWS</Link></div>
                <div onClick={()=> setOpen(!open)}><Link to="/Products">PRODUCTS</Link></div>
                {/* <div onClick={()=> setOpen(!open)}><Link to="/PatchandPrinting/PATCH,MATCH DETAIL,NAME SET">PATCH &amp; PRINTING</Link></div> */}
                <div onClick={()=> setOpen(!open)}><Link to="/trackOrder">TRACK ORDER</Link></div>
                <div onClick={()=> setOpen(!open)}><Link to="/login">LOGIN</Link></div>
                
            </div>;
};

export default Sidebar;
