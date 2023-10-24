import React from 'react'
import Times from './Times';
const FilterApply = ({filters, dispatch, removeFilter, testany, setTestAny, setcurFilters, curFilters, setcurProducts, products, applyFilter}) => {
    // console.log("Filter apply");
    // console.log(afilters);
    const stringData = (data) =>  data.reduce((result, item) => {
    return `${result}, ${item}`
    }, "");

    return (
        <>
            { filters? 
            Object.entries(filters).map((t,k) => (
                
                <div key={k} value={t[0]}>{t[0]} - {t[1]? (typeof(t[1]) === "string"? t[1] :stringData(t[1]).toString().substring(2)) : null} 
                                       <div onClick={(e) => {console.log(t[0]); 
                                                                                   delete filters[t[0]];

                                                                                   if (testany === 'b') {
                                                                                       setTestAny('a');
                                                                                   }else
                                                                                   {
                                                                                       setTestAny('b');
                                                                                   }
                                                                                dispatch(removeFilter(filters, t[0])); 
                                                                                setcurFilters(filters);
                                                                                applyFilter(products, filters);
                                                                            
                                                                            
                                                                            
                                                                            }}><Times/></div></div>
            ))
            :<div>no filters</div>}

{/*             
            {Object.entries(afilters).map((t,k) => console.log(k, t[0], typeof(t[1]), typeof("string")))
            } */}
        </>
    )
}

export default FilterApply
