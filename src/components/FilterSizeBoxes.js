
import './SizeBoxes.css';

const FilterSizeBoxes = ({boxArray, sizeChangeHandler, box, setBox}) => {
    return (
        <div className="sbox-container">
            {boxArray.map(b => (<li key={b} className={box === b? "sizeon sbox": "sbox"} 
                                    value={b} 
                                    onClick={(e)=>{setBox(e.target.outerText); sizeChangeHandler(e)}}>{b}</li>))}
        </div>
    );
};

export default FilterSizeBoxes;
