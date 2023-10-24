// import React, { useState } from 'react'
// import {MdDateRange} from 'react-icons/md'
// import {LuClock2} from 'react-icons/lu'
// import Listxitem from './Listxitem'

// import {
//   DatePicker,
//   DatePickerProvider,
//   useDatePickGetter,
//   useDatePickReset,
// } from '@bcad1591/react-date-picker';

// const CustomInput = ({icon, txt, val}) => {

//   const [stime, setstime] = useState("noon");
//   const [etime, setetime] = useState("noon");
//   const [show, setdisplay] = useState(true);

//   const { pickedDates } = useDatePickGetter();
//   const resetFunc = useDatePickReset();

//   function handleClick()
//   {
//     setdisplay(!show);
//   }
//   const timelist = [
//     {
//       id: "6",
//       val: "06:00"
//     },{
//       id: "7",
//       val: "07:00"
//     },{
//       id: "8",
//       val: "08:00"
//     },{
//       id: "9",
//       val: "09:00"
//     },{
//       id: "10",
//       val: "10:00"
//     }
//   ]

//   return (
//     <div style={{position:"relative"}} >
//       <div className='rflex ele' onClick={() => handleClick()}>
//           <div>{icon == "date"? <MdDateRange style={{color:'black', cursor:'pointer', fontSize:'2em'}} />
//                 :<LuClock2 style={{color:'black', cursor:'pointer', fontSize:'2em'}} />}
//           </div>
//           <div className='cflex'>
//               <div>{txt}</div>
//               <div>{stime}</div>
//           </div>
//       </div>
//       {icon == "time" ?
//       <div className="db" style={show?{display:"block"} : {display:"none"}}>
//         <ul>
//           {timelist.map((x) => {
//             return <li key={x.id} onClick={() => {setstime(x.val); handleClick();}}>{x.val}</li>
//             // return <Listxitem id={x.id} val={x.val} setstime={setstime} />
//           })
//           }
//           {/* <Listxitem id="1" val="item1" />
//           <Listxitem id="2" val="item2" />
//           <Listxitem id="3" val="item3" />
//           <Listxitem id="4" val="item4" /> */}
//         </ul>
//       </div>
//       : <>
//           <div>datepicker</div>
//           {/* <div>
//             <DatePicker disablePreviousDays />
//             <hr />
//             <div>{pickedDates.firstPickedDate?.toString()}</div>
//             <div>{pickedDates.secondPickedDate?.toString()}</div>
//             <button type="button" onClick={resetFunc}>
//               Reset
//             </button>
//           </div> */}

//       </>}
//     </div>
//   )
// }
 
// export default CustomInput