import './SizeBoxes.css';
import React, {useState} from 'react';

const FilterCheckbox = ({section_name, dataArray}) => {


    return (
        <div>
            <div style={{"padding":"1em 0", "fontWeight":"700"}}>{section_name}</div>
         
            <ul>
                {dataArray.map((b, i) => (
                                            <li key={`c_${section_name}_${i}`}
                                                    value={b} 
                                                    >
                                                <label className="cb_container" >
                                                    {b}
                                                    {/* &nbsp;({curProducts.filter((p) => {return (p[section_name2] === b)}).length}) */}
                                                    <input type="checkbox" readOnly />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </li>)
                                )}
            </ul>
        </div>
    )
}

export default FilterCheckbox
