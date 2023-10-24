import React from 'react'
import {MdDateRange} from 'react-icons/md'
import {LuClock2} from 'react-icons/lu'

export default function CustomInput({icon, txt, val, id}) {
  return (
    <div className='rflex ele'>
        <div>{icon == "date"? <MdDateRange style={{color:'black', cursor:'pointer', fontSize:'1em'}} />
              :<LuClock2 style={{color:'black', cursor:'pointer', fontSize:'1em'}} />}
        </div>
        <div className='cflex formItem'>
            <div>{txt}</div>
            <div>{val}</div>
        </div>
    </div>
  )
}
