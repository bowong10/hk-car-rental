import React from 'react'
import './Details.css';
import CarCard from '../components/CarCard';

const Details = () => {
  return (
    
    <div className="inner90">
      <div className='titletxt2'>Booking Car Details</div>

      <div className="shopMenu details" >
        <CarCard id={1} imageUrl={"car1.png"} name="Honda" />
        <div className='detailsPrice'>
          <div>
              Car price breakdown
          </div>
          <div>
              <div>Car hire charge</div>
              <div>HK$1,512.41</div>
          </div>
          <div>
              <div>Price for 2 days</div>
              <div>HK$3,024.82</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Details