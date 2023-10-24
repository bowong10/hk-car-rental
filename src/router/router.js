import React from 'react';
import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../View/Home';
import TestPage from '../View/TestPage';
import Error from '../View/Error';

const ReactRouterSetup = () => {
    // const [sideToggle, setsideToggle] = useState(false);
    const [open, setOpen] = useState(false);
    const [nav, setNav] = useState("home");
    const [cur, setCur] = useState("GBP");

    // const [login, setLogin] = useState(false);
    
    const handleResize = () => {
        // console.log(window.innerWidth);
        if((window.innerWidth / 16) > 40)
        {
            setOpen(false);
        }
    }


    // useEffect(() => {
    //     // let x = localStorage.getItem('currency');
    //     // console.log('router effect currency:', x);
    //     }, [cur]
    // );
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    return (
    <Router>
        {/* <Sidebar open={open} setOpen={setOpen} />
        <Backdrop show={open} click={() => setOpen(false)} />
        <Headbar setNav={setNav} cur={cur} setCur={setCur} />
        <Navbar  open={open} setOpen={setOpen} nav={nav} setNav={setNav} /> */}
        {/* <Navbar click={()=> {setsideToggle(true); console.log('iclick');}} show={sideToggle}/> */}
        
        {/* <Burger open={open} setOpen={setOpen} /> */}
        
        <Switch>
            <Route exact path = '/testing'><TestPage/></Route>
            <Route exact path = "/"><Home/></Route>
            {/* <Route exact path = '/testingabcd' component={TestPage}/>
            <Route exact path = '/trackOrder'><TrackOrder/></Route>
            <Route exact path = '/login'><LoginPage/></Route>
            <Route exact path = '/register'><RegisterPage/></Route>
            <Route exact path = '/reset_password'><ResetPage/></Route>
            <Route exact path = '/reset_password/:token'><ResetLinkPage/></Route>
            <Route exact path = '/Products/'><Product /></Route>
            <Route exact path = '/Products/:department'><Product/></Route> */}


            {/* <Route exact path = '/Products/:department/:competition'><Product/></Route>
            <Route exact path = '/Products/:department/:competition/:federation'><Product/></Route>
            <Route exact path = '/Products/:department/:competition/:federation/:team'><Product/></Route> */}
            {/* <Route exact path = '/Products/:department/:competition/:federation'><Product ff={{filter_type:"department", filter_value:"JERSEY"}}/></Route> */}
{/*             
            <Route exact path = '/PatchAndPrinting'><Product ff={{filter_type:"department", filter_value:"PATCH,MATCH DETAIL,NAMESET"}}/></Route>
            <Route exact path = '/Accessories'><Product /></Route>
            <Route exact path = '/Collector'><Product /></Route>
            <Route exact path = '/superdupersecretadminpagebyhf' component={Admin}></Route>

            <Route exact path = '/Account' component={Account} />
            <Route exact path = '/Product/:id' component={ProductItem}></Route>
            <Route exact path = '/ShoppingCart'><ShoppingCart nav={nav} setNav={setNav}/></Route> */}
            <Route exact path = '*'><Error/></Route>
        </Switch>
    </Router>
    );
};

export default ReactRouterSetup;