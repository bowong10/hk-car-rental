
import './SizeBoxes.css';

import React from 'react'

const FilterCheckbox = ({section_name, dataArray, filterHandler, filter_type, test, setTest, filters, addFilter, dispatch, setcurFilters, curFilters, products, applyFilter}) => {
// const FilterCheckbox = (props) => {
    // console.log(cur_val);
    
    // const [test,setTest] = useState(dataArray.map( b=> false));
    // console.log(test);
    // console.log('Child FilterCheckbox rendering')

    // console.log("props: ", props);
    return (
        <div>
            <span className="filter_section">{section_name}</span>
            <ul>
                {dataArray.map((b, i) => (<li key={b}
                                            value={b} 
                                            >
                                        <label className="cb_container" 
                                            // onClick={(e) => { console.log('why is this not clicked'); props.onClick(b, props.filter_type, props.filters, e);}
                                            onClick={(e) =>
                                            {
                                            e.preventDefault();
                                            setTest({...test, [b]:!test[b]});
                                            // console.log('aftersetTest', test);
                                            // filterHandler(e, filter_type, b);
                                            
                                            // if (filters[filter_type]){
                                            //     console.log("exist b : ", b , filters[filter_type].indexOf(b));
                                            // }
                                            
                                            // console.log('before updated here in child: ', filters);
        
                                            dispatch(addFilter(b, filter_type, filters));

                                            // console.log('hello r u updated here in child: ', filters);
                                            setcurFilters(filters);
                                            applyFilter(products, filters);
                                            // setcurProducts(applyFilter(products, filters));
                                            // if (filters[filter_type]){
                                            //     console.log("after exist b : ", b , filters[filter_type].indexOf(b));
                                            // }
                                            }
                                        }>
                                            {b}
                                            {/* <input type="checkbox" checked={test[b] === true? true:false} readOnly /> */}
                                            {/*  it needs the test thing to trigger re rendering, maybe the filters below are old */ }
                                            <input type="checkbox" checked={filters[filter_type]? (filters[filter_type].indexOf(b) > -1 ? true:false) : false} readOnly />
                                            <span className="checkmark"></span>
                                        </label>
                                    </li>))}
            </ul>
        </div>
    )
}

export default FilterCheckbox
