import React from 'react';
import { Link } from 'react-router-dom';
import './Car_Card.css'

const Car_Card = ({name, imageUrl, id}) => {

    return (
        <>
            <div className="card" key={id}>
                {/* <div>
                    <div>
                        <span style={{"fontSize":"14px", "fontWeight":"700"}}>Nissan Sentra</span> or similar large car
                    </div>
                    <div className="cartags" style={{"marginTop":"1em"}}>
                        <div>4 seats</div>
                        <div>Automatic</div>
                        <div>Unlimited mileage</div>
                        <div>Instant confirmation</div>
                    </div>
                </div>
                <div>
                    <div className='cardimg'>
                        <img className="card_front" src={require(`../static/Image/car/${imageUrl}`)} alt=""></img>
                    </div>
                    <div className='cpr'>
                        <div className='sf'>Price for 3 days:</div>
                        <div className='pricetag'>HK$1,088.30</div>
                        <div className='specialf'>Free cancellation</div>
                    </div>
                </div> */}
                {/* <div className='cardimg'>
                    <img className="card_front" src={require(`../static/Image/car/${imageUrl}`)} alt=""></img>
                </div>
                <div>
                    <div>
                        <div>
                            <span style={{"fontSize":"14px", "fontWeight":"700"}}>Nissan Sentra</span> or similar large car
                        </div>
                        <div className="cartags" style={{"marginTop":"1em"}}>
                            <div>4 seats</div>
                            <div>Automatic</div>
                            <div>Unlimited mileage</div>
                            <div>Instant confirmation</div>
                        </div>
                    </div>
                    <div className='cpr'>
                        <div className='pricetag'>HK$1,088.30</div>
                        <div className='specialf'>Free cancellation</div>
                    </div>
                </div> */}

                <div className='grid-container'>
                                        
                    <div class="g_img">
                        <Link to="/Details">
                            <img className="card_front" src={require(`../static/Image/car/${imageUrl}`)} alt=""></img>
                        </Link>
                    </div>
                    <div class="g_details">
                        <div>
                            <span style={{"fontSize":"16px", "fontWeight":"700"}}>Nissan Sentra</span> or similar large car
                        </div>
                        <div className="cartags" style={{"marginTop":"1em"}}>
                            <div>4 seats</div>
                            <div>Automatic</div>
                            <div>Unlimited mileage</div>
                            <div>Instant confirmation</div>
                        </div>
                    </div>
                    <div class="g_price">
                        <div className='pricetag'>HK$1,088.30</div>
                        <div className='specialf'>Free cancellation</div>
                    </div>  

                </div>
            </div>
        </>
    );
};

export default Car_Card;