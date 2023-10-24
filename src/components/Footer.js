import React from 'react'
import './Footer.css';


import {FaFacebookSquare} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer inner90">
                <div className="fcontent split100 spaces">
                    
                    <div>
                        <p className="font500">
                            Customer Service
                        </p>
                        <div>
                            <ul>
                                <li>Bookings</li>
                                <li>Reservations</li>
                                <li>Special Offers</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="font500">
                            Car Rental Destinations
                        </p>
                        <div>
                            <ul>
                                <li>Australia</li>
                                <li>France</li>
                                <li>Hong Kong</li>
                                <li>Italy</li>
                                <li>New Zealand</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="font500">Information</p>
                        <div>

                            <ul>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Rewards</li>
                                <li>Terms of Use</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="font500">Accept Payment</p>
                        <div>
                            <ul>
                                <li>Visa</li>
                                <li>MasterCard</li>
                                <li>PayPal</li>
                                <li>WeChat Pay</li>
                                <li>Apple Pay</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="socialM">
                    <span>Follow Us: </span>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Google"><FaFacebookSquare /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/bravegirls.official"><BsYoutube/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/bravefamily"><BsInstagram/></a>
                    {/* <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/bravefamily"><span className="fab fa-youtube"/></a> */}
                </div>
                <div className="fcr">© Car Rental Company, 2023. All Rights Reserved.</div>
        </div>
        </div>  
    );
};


export default Footer
