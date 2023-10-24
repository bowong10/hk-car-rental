
import './SizeBoxes.css';
import React, {useState} from 'react';

const FilterRadio = ({section_name, section_name2, dataArray, filter_type, filters, addFilter, dispatch, setcurFilters, curProducts, products, applyFilter, display}) => {
   
    const [dis, setDis] = useState({
                                        dis:display,
                                        deg:""
                                    });
    
    if(!dataArray || dataArray.length === 0) return(<div></div>);
    return (
        <div key={filter_type}>
            {/* <span className="filter_section">{section_name}</span>
             */}
            <div className="filter_section" onClick={()=>{dis.dis==="none"? setDis({dis:"flex",deg:""}):setDis({dis:"none",deg:" arrowDown"})}}>
                <div>{section_name.toUpperCase()}</div>
                <div className={"arrowUp" + dis.deg}></div>
            </div>
            <ul style={dis.dis ==="none"?{"display":"none"}:{}}>
                {dataArray.map((b, i) => (
                                            curProducts.filter((p) => {return (p[section_name2] === b)}).length > 0 ? 
                                    <li key={i}
                                        value={b} 
                                        onClick={(e)=>  {
                                                            e.preventDefault();
                                                            // filterHandler(e, filter_type, b)
                                                            dispatch(addFilter(b, filter_type, filters));
                                                            setcurFilters(filters);
                                                            applyFilter(products, filters);
                                                        }
                                                }>
                                        <label className="cb_container">
                                            {b}
                                            &nbsp;({curProducts.filter((p) => {return (p[section_name2] === b)}).length})
                                            {/* <input type="checkbox" checked={test === b? true:false} readOnly /> */}
                                            <input type="checkbox" checked={filters[filter_type]? (filters[filter_type].indexOf(b) > -1 ? true:false) : false} readOnly />
                                            <span className="checkmark radiom"></span>
                                        </label>
                                    </li>: null))}
            
            </ul>
        </div> 
    )
}

export default FilterRadio
