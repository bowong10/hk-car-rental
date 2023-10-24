import './Car.css';
import Car_Card from '../components/Car_Card';
import React, { useEffect, useState} from 'react';
// import { useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import FilterRadio from '../components/FilterRadio';
import FilterCheckbox from '../components/FilterCheckbox';
import SearchForm from '../components/SearchForm';

const Car = () => {
    
    const [checked, setChecked] = useState(true);
    const [edit, setEdit] = useState(false);
    const handleCheck = () => {
        setChecked(!checked);
        console.log(checked);
    }

    const handleEdit = () => {
        setEdit(!edit); 
        console.log("edit");
        console.log(edit);
    }

    return (
        <div className="inner90">
            <div className='tripbox'>
                <div className='triptf'>
                    <div className="tripc">
                        <div>Hong Kong Airport</div>
                        <div>Fri, 27 Oct 2023, 10:00</div>
                    </div>
                    <div className='tripFlow'>
                        &gt;
                    </div>
                    <div className="tripc">
                        <div>Hong Kong Airport</div>
                        <div>Mon, 30 Oct 2023, 17:00</div>
                    </div>
                </div>
                <div>
                    <button className='tripEdit' onClick={(e) => handleEdit()}>Edit</button>
                </div>
            </div>
            <SearchForm checked={checked} setChecked={setChecked} show={edit} />

            <div className='rf searchControl'>
                <div>
                    Filter
                </div>
                <div>
                    Sort
                </div>
            </div>
            <div className='searchInfo'>
               Los Angeles International Airport: 36 cars available
            </div>
            <div className="shop">
                
                <div className="filterBox"> 
                 {/* style={{"display":"none"}}> */}
                    <div className='rflex' style={{"marginTop":"0.5em"}}>
                        <div className="filter-title" style={{"color":"black"}}>Filter</div>
                        <div style={{"fontSize":"12px"}}>Clear all filters</div>
                    </div>
                    
                    <div>
                        <FilterCheckbox key='FilterCheckbox1' section_name="Price per day" 
                        dataArray={["Below HK$500","HK$500 - HK$1,000",
                                    "HK$1,000 - HK$1,500", "HK$1,500 - HK$2,000",
                                    "HK$2,000"]} 
                        display="flex"
                        />
                        <FilterCheckbox key='FilterCheckbox2' section_name="Car specs" 
                        dataArray={["Air conditioning","4+ doors", "Insurance included"]} 
                        display="flex"
                        />
                        
                        <FilterCheckbox key='FilterCheckbox3' section_name="Electric cars" 
                        dataArray={["Fully electric", "Hybrid", "Plug-in hybrid"]} 
                        display="flex"
                        />
                    </div>
                    
                </div>
                <div className='shopcontainer'>
                    <div className="shopheader" style={{"display":"none"}}>
                        <div className="carType">
                            <div>
                                <span class="SM_cc0ee90b SM_8b1e55c8" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"> 
                                    {/* viewBox="0 0 24 24"> */}
                                        <path d="M18 17a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zM6 17a.75.75 0 1 1-1.5 0A.75.75 0 0 1 6 17zm1.5 0A2.25 2.25 0 1 0 3 17a2.25 2.25 0 0 0 4.5 0zm8.25-.75h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm-12 0h-1.5a.75.75 0 0 1-.75-.75V14a2.25 2.25 0 0 1 2.25-2.25.75.75 0 0 0 .67-.415l1.836-3.67a.75.75 0 0 1 .67-.415h7.901a.75.75 0 0 1 .671.415l1.83 3.67a.75.75 0 0 0 .672.415h2.25A2.25 2.25 0 0 1 22.5 14v1.5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 0 0 1.5h3A2.25 2.25 0 0 0 24 15.5V14a3.75 3.75 0 0 0-3.75-3.75H18l.671.415-1.83-3.67a2.25 2.25 0 0 0-2.014-1.245h-7.9a2.25 2.25 0 0 0-2.013 1.244l-1.835 3.67.671-.414A3.75 3.75 0 0 0 0 14v1.5a2.25 2.25 0 0 0 2.25 2.25h1.5a.75.75 0 0 0 0-1.5zm14.25-6H3.75a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5z"></path></svg>
                                        </span>
                            </div>
                            <div class="spantxt">Medium car</div>
                        </div>
                        <div className="carType">
                            <div>
                                <span class="SM_cc0ee90b SM_8b1e55c8" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"> 
                                    {/* viewBox="0 0 24 24"> */}
                                    <path fill-rule="evenodd" d="M5.02 7.03a.72.72 0 0 1 .57-.28h7.25c.21 0 .41.09.55.24l2.89 3.13H2.76c.18-.27.38-.57.6-.88.58-.82 1.23-1.67 1.66-2.22Zm-2.62 4.6h18.07c.7 0 1.27.57 1.27 1.27 0 .51-.31.98-.78 1.18l-2.64 1.1c-.41-.56-1.07-.93-1.82-.93-.98 0-1.82.63-2.13 1.51-.04 0-.08-.01-.12-.01H8.12c-.31-.87-1.14-1.5-2.12-1.5-.66 0-1.25.28-1.66.73a7.051 7.051 0 0 1-1.94-3.36Zm11.97 5.61s-.08.01-.12.01H8.12c-.31.87-1.14 1.5-2.12 1.5-1.24 0-2.25-1.01-2.25-2.25v-.03l-.07-.06a8.605 8.605 0 0 1-2.93-5.44c-.02-.12 0-.24.04-.35.1-.3.31-.66.53-1.02.23-.38.52-.8.82-1.22.6-.85 1.27-1.72 1.7-2.27.43-.55 1.08-.85 1.76-.85h7.25c.63 0 1.23.26 1.65.72l3.83 4.15h2.15a2.77 2.77 0 0 1 1.06 5.33l-2.8 1.16a2.256 2.256 0 0 1-4.38.61ZM6 17.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75-.75.34-.75.75.34.75.75.75Zm11.25-.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75Z"></path></svg>
                                    </span>
                            </div>
                            <div class="spantxt">Small car</div>
                        </div>
                        <div className="carType">
                            <div>
                                <span class="SM_cc0ee90b SM_8b1e55c8" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"> 
                                    {/* viewBox="0 0 24 24"> */}
                                    <path d="M19.468 21.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm-15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm12.75.75h1.532A2.25 2.25 0 0 0 24 20.25 5.278 5.278 0 0 0 18.717 15l.713.513c-.08-.24-.238-.638-.482-1.143a13.643 13.643 0 0 0-1.513-2.455c-1.771-2.278-4.083-3.665-6.967-3.665C4.554 8.25.358 12.258.002 20.182A2.22 2.22 0 0 0 2.217 22.5h1.501a.75.75 0 0 0 0-1.5h-1.53a.72.72 0 0 1-.688-.751C1.82 13.127 5.356 9.75 10.468 9.75c2.366 0 4.273 1.144 5.783 3.085a12.165 12.165 0 0 1 1.755 3.152.75.75 0 0 0 .713.513 3.777 3.777 0 0 1 3.781 3.755.75.75 0 0 1-.75.745h-1.532a.75.75 0 0 0 0 1.5zm-3-1.5h-10.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm1.5-6H1.484a.75.75 0 0 0 0 1.5h17.234a.75.75 0 0 0 0-1.5zm-8.218.75V9.025a.75.75 0 0 0-1.5 0v6.725a.75.75 0 0 0 1.5 0zm-5.25-9V5.5a.25.25 0 0 1 .25-.25H14a.25.25 0 0 1 .25.25V8a.25.25 0 0 1-.25.25H5.5A.25.25 0 0 1 5.25 8V6.75zm-1.5 0V8c0 .966.784 1.75 1.75 1.75H14A1.75 1.75 0 0 0 15.75 8V5.5A1.75 1.75 0 0 0 14 3.75H5.5A1.75 1.75 0 0 0 3.75 5.5v1.25zm3-4.125V1.75A.25.25 0 0 1 7 1.5h5.5a.25.25 0 0 1 .25.25V3.5a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25v-.875zm-1.5 0V3.5c0 .966.784 1.75 1.75 1.75h5.5a1.75 1.75 0 0 0 1.75-1.75V1.75A1.75 1.75 0 0 0 12.5 0H7a1.75 1.75 0 0 0-1.75 1.75v.875zm6 1.875V9a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-1.5 0zm-4.5 0V9a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-1.5 0z"></path></svg>
                                    </span>
                            </div>
                            <div class="spantxt">Large car</div>
                        </div>
                        <div className="carType">
                            <div>
                                <span class="SM_cc0ee90b SM_8b1e55c8" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"> 
                                    {/* viewBox="0 0 24 24"> */}
                                    <path d="M8.25 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm10.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm1.5 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0zM3.056 15.429a4.5 4.5 0 0 1 7.388 0 .75.75 0 0 0 .615.321h3.382a.75.75 0 0 0 .615-.321 4.5 4.5 0 0 1 7.388 0 .75.75 0 0 0 1.23-.858 6 6 0 0 0-9.848 0l.615-.321h-3.382V15l.616-.429a6 6 0 0 0-9.85 0 .75.75 0 1 0 1.231.858zM22.5 13.69V11.25A2.25 2.25 0 0 0 20.25 9H3.75a.75.75 0 0 0-.75.75v3.942a.75.75 0 0 0 1.5 0V9.75l-.75.75h16.5a.75.75 0 0 1 .75.75v2.441a.75.75 0 0 0 1.5 0zm-4.529-4.147l-1.189-4.162A2.25 2.25 0 0 0 14.62 3.75h-7a2.25 2.25 0 0 0-1.951 1.134l-2.57 4.494a.75.75 0 1 0 1.303.744l2.57-4.494a.75.75 0 0 1 .65-.378h6.998a.75.75 0 0 1 .72.544l1.19 4.162a.75.75 0 1 0 1.442-.412zM0 7.5v5.25a.75.75 0 0 0 1.5 0V7.5a.75.75 0 0 0-1.5 0zm9-3v5.25a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-1.5 0z"></path></svg>
                                    </span>
                            </div>
                            <div class="spantxt">SUVs</div>
                        </div>
                        <div className="carType">
                            <div>
                                <span class="SM_cc0ee90b SM_8b1e55c8" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"> 
                                    {/* viewBox="0 0 24 24"> */}
                                    <path fill-rule="evenodd" d="M0 6.75C0 4.68 1.68 3 3.75 3H15.1c1.37 0 2.63.74 3.29 1.94l3.03 5.5a.3.3 0 0 0 .21.15c1.37.23 2.38 1.41 2.38 2.8v1.6c0 1.98-1.53 3.59-3.47 3.74a3.004 3.004 0 0 1-5.82.01H7.78c-.33 1.29-1.51 2.25-2.91 2.25s-2.68-1.04-2.95-2.43A3.057 3.057 0 0 1 0 15.71V6.75ZM16.12 18c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5Zm4.4-.77c-.34-1.29-1.51-2.23-2.9-2.23s-2.57.96-2.91 2.25H7.77A3.006 3.006 0 0 0 4.86 15c-1.28 0-2.37.8-2.8 1.93a1.58 1.58 0 0 1-.57-1.22V12h19.58c.1.03.2.06.3.08.65.11 1.12.67 1.12 1.33v1.6c0 1.15-.86 2.1-1.97 2.23ZM4.87 16.5c-.82 0-1.49.66-1.5 1.49v.02c0 .82.68 1.49 1.5 1.49s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm9.75-6h5.11l-1.65-3h-3.46v3Zm-1.5-3v3H1.5v-3h11.62Zm3.95-1.83.18.33H1.63c.31-.87 1.14-1.5 2.12-1.5H15.1c.82 0 1.58.45 1.97 1.17Z"></path></svg>
                                    </span>
                            </div>
                            <div class="spantxt">People carrier</div>
                        </div>
                        <div className="carType">
                            <div>
                                <span class="SM_cc0ee90b SM_8b1e55c8" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"> 
                                    {/* viewBox="0 0 24 24"> */}
                                    <path d="M19.5 15.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm-13.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.5 0a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0zm8.25-.75h-9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm-12 0h-3a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75H3c1.184 0 1.792-.398 4.312-2.414C9.168 8.1 10.22 7.5 11.25 7.5H15c.635 0 1.216.359 1.5.927l1.58 3.158a.75.75 0 0 0 .67.415h1.5a2.25 2.25 0 0 1 2.25 2.25.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 0 0 1.5h1.5A2.25 2.25 0 0 0 24 14.25a3.75 3.75 0 0 0-3.75-3.75h-1.5l.67.415-1.578-3.158A3.176 3.176 0 0 0 15 6h-3.75c-1.501 0-2.746.712-4.875 2.414C4.255 10.11 3.66 10.5 3 10.5h-.75A2.25 2.25 0 0 0 0 12.75v1.5a2.25 2.25 0 0 0 2.25 2.25h3a.75.75 0 0 0 0-1.5zM3 11.25V9a.75.75 0 0 0-.415-.67l-1.5-.75a.75.75 0 0 0-.67 1.34l1.5.75L1.5 9v2.25a.75.75 0 0 0 1.5 0zm15.75-.75H3A.75.75 0 0 0 3 12h15.75a.75.75 0 0 0 0-1.5z"></path></svg>
                                    </span>
                            </div>
                            <div class="spantxt">Premium car</div>
                        </div>

                    </div>
                    <div className="shopMenu">
                        {/* <div className="prodhead">
                            <div>ITEMS: {curProducts?curProducts.length:products.length}</div>

                            <ProductPage totalPages={totalPages} page={page} setPage={setPage}/>
                        </div> */}
                            {/* <img src={car4} alt="" /> */}
                        <Car_Card id={1} imageUrl={"car1.png"} name="Honda" />
                        <Car_Card id={2} imageUrl={"car2.png"} name="Toyota" />
                        <Car_Card id={3} imageUrl={"car3.png"} name="Wakanda" />
                        <Car_Card id={4} imageUrl={"car4.png"} name="Audi" />
                        <Car_Card id={5} imageUrl={"car2.png"} name="Toyota" />
                        <Car_Card id={6} imageUrl={"car3.png"} name="Wakanda" />
                        <Car_Card id={7} imageUrl={"car4.png"} name="Audi" />
                        <Car_Card id={8} imageUrl={"car1.png"} name="Audi" />
                        <Car_Card id={9} imageUrl={"car2.png"} name="Toyota" />
                        <Car_Card id={10} imageUrl={"car3.png"} name="Wakanda" />
                        <Car_Card id={11} imageUrl={"car4.png"} name="Audi" />
                        <Car_Card id={12} imageUrl={"car1.png"} name="Audi" />
                        
                    </div>
                </div>
            </div>

            
        </div>
        );
};

export default Car;
