
import './SizeBoxes.css';
import React from 'react'

const FilterRadioList = ({section_name, dataArray, filterHandler, filter_type, test, setTest}) => {
   
    return (
        <div>
            <span className="filter_section">{section_name}</span>
            <ul>
                {dataArray.map((b, i) => (<li key={b}
                                        value={b} 
                                        onClick={(e)=>{
                                            
                                            setTest(b);
                                            filterHandler(e, filter_type, b)
                                            }}>
                                        <label className="cb_container">
                                            {b}
                                            <input type="checkbox" checked={test === b? true:false}  readOnly/>
                                            <span className="checkmark radiom"></span>
                                        </label>
                                    </li>))}
            
            </ul>
        </div>
    )
}

export default FilterRadioList
