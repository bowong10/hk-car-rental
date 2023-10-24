
import {testServerRoute as listProducts} from '../redux/actions/productActions';
import './Product.css';

import React, { useEffect} from 'react';
import { useDispatch} from 'react-redux';
// import { useDispatch, useSelector} from 'react-redux';

        
const TestPage = (props) => {
    
    // props.history.push('/testing');
    const dispatch = useDispatch();
    // const getProducts = useSelector (state => state.getProducts);
    // const { loading, products, error} = getProducts;

    console.log(props);

    useEffect(() => {
        console.log('hello im in useeffect');
        listProducts()
        }, [dispatch]
    );

    return (
        <div>
            Testing Page
        </div>
    )
}

export default TestPage
