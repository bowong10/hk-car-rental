
import './SizeBoxes.css';

const SizeBoxes = ({boxArray, qty, item, sizeChangeHandler, box, setBox}) => {
    return (
        <div className="sbox-container">
            {boxArray.map(b => (<li key={b} className={box === b? "sizeon sbox": "sbox"} value={b} onClick={(e)=>{setBox(e.target.outerText); sizeChangeHandler(item, qty, e.target.outerText)}}>{b}</li>))}
        </div>
    );
};

export default SizeBoxes;
