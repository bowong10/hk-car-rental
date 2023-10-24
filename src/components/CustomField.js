import React, { useState } from 'react'
import {MdDateRange} from 'react-icons/md'
import {LuClock2} from 'react-icons/lu'


const CustomField= ({icon, txt, val}) => {

  const [ctrlval, setctrlval] = useState(val);
  const [etime, setetime] = useState("noon");
  const [show, setdisplay] = useState(false);


  function handleClick()
  {
    setdisplay(!show);
  }
  const timelist = [
    {
      id: "6",
      val: "06:00"
    },{
      id: "7",
      val: "07:00"
    },{
      id: "8",
      val: "08:00"
    },{
      id: "9",
      val: "09:00"
    },{
      id: "10",
      val: "10:00"
    },{
      id: "11",
      val: "11:00"
    },{
      id: "12",
      val: "12:00"
    },{
      id: "13",
      val: "13:00"
    },{
      id: "14",
      val: "14:00"
    },{
      id: "15",
      val: "15:00"
    }
    
  ]

  return (
    <div className={icon=="date"?"rf el": "rf el timediv"}  onClick={() => handleClick()}>
        <div>
            <span className='icon'>{icon == "date"? <MdDateRange style={{color:'black', cursor:'pointer', fontSize:'1em'}} />
            :<LuClock2 style={{color:'black', cursor:'pointer', fontSize:'1em'}} />}
            </span>
        </div>
        <div className='cf'>
            <div>{txt}</div>
            <div>{ctrlval}</div>
        </div>
        {icon == "time" ?
      <div className="db" style={show?{display:"block"} : {display:"none"}}>
        <ul>
          {timelist.map((x) => {
            return <li key={x.id} onClick={() => {setctrlval(x.val); handleClick();}}>{x.val}</li>
            // return <Listxitem id={x.id} val={x.val} setstime={setstime} />
          })
          }
        </ul>
      </div>
      : <>
          <div className="db" style={show?{display:"block"} : {display:"none"}}>datepicker</div>
          {/* <div>
            <DatePicker disablePreviousDays />
            <hr />
            <div>{pickedDates.firstPickedDate?.toString()}</div>
            <div>{pickedDates.secondPickedDate?.toString()}</div>
            <button type="button" onClick={resetFunc}>
              Reset
            </button>
          </div> */}

      </>}
    </div>
  )
}
 
export default CustomField