import React, { useState } from 'react'
import {MdDateRange} from 'react-icons/md'
import {LuClock2} from 'react-icons/lu'


const CustomTxtField= ({txt, val, show_element}) => {

  const [show, setdisplay] = useState(true);


  function handleClick()
  {
    setdisplay(!show);
  }

  return (
    <div className='cf' style={{"display":show_element=="true"?"flex" : "none"}}>
        <div>{txt}</div>
        <div>
          <input type='text' placeholder={val} />
        </div>
    </div>
  )
}
 
export default CustomTxtField