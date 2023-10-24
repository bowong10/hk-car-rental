import React, { useRef, useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { transaction} from '../redux/actions/transactionAction';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

export default function Paypal({ttl, paidFor, setPaidFor, cartItems, email}) {
    const paypal = useRef();

    // const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // const history = useHistory();
    // const {items, total} = props;
    // const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    
    // console.log("Paypal total amount: ", ttl);
    // console.log("Paypal cart: ", cartItems)

    const item_details = [];

    const updateInventory = () => {

        axios.put('/api/inventory/updateInventory', {data: cartItems})
        .then(res => {
            console.log("response from api updateInventory", res.data);
            alert("Update data success");
        })
        .catch(err=>{
            console.log('there is an error)');
            console.log(err);
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers);
        })
    };
    
    useEffect(()=>{
        cartItems.map((item)=>{
            var i = {
                name: item.name,
                description:item.name + ' ' + item.size,
                sku:item.product.SKU,
                unit_amount:{
                    currency_code:"HKD",
                    value: "0.01" //item.price
                },
                quantity: item.qty
            };
            item_details.push(i);

            // console.log(item.additional);
            if (item.additional.length > 0){
                item.additional.map((add_item) => {
                    var i = {
                        name: add_item.name,
                        description:add_item.name,
                        sku:add_item.SKU,
                        unit_amount:{
                            currency_code:"HKD",
                            value: "0.01"//add_item.price
                        },
                        quantity: 1
                    };
                    item_details.push(i);
                })
            }
        })
        console.log("Paypal cart item_details: ", item_details);

        ttl = 0.01*item_details.length;
    },[]);


    useEffect(()=>{
        window.paypal.Buttons({
            locale: 'en_US',
            style: {
                    size:'large',
                    color:'blue',
                    shape:'rect',
                    label:'checkout'
                        
            },
            // createOrder: (date, actions, err) => {
            //     return actions.order.create({
            //         intent: "CAPTURE",
            //         purchase_units: [{
            //             description: "Coffee Fake Table",
            //             amount: {
            //                 curreny_code: "HKD",
            //                 value: 0.01 //ttl
            //             }
            //         }]
            //     })
            // },
            createOrder: (date, actions, err) => {
                return actions.order.create({
                    intent: "authorize",
                    payer:{
                        payment_method: "paypal"
                    },
                    purchase_units: [{
                        description: "Purchase order",
                        amount: {
                            curreny_code: "HKD",
                            value: ttl,
                            breakdown:{
                                item_total:{
                                    currency_code:"HKD",
                                    value:  ttl
                                }
                            }
                        },
                        items: item_details
                        // items: [
                        //     {
                        //         name: "Item 1",
                        //         description: "The best item ever",
                        //         sku: "xyz-2654",
                        //         unit_amount: {
                        //             currency_code: "HKD",
                        //             value: "0.01"
                        //         },
                        //         quantity: "1"
                        //     },
                        //     {
                        //         name: "Item 2",
                        //         description: "Not bad too",
                        //         sku: "zdc-3942",
                        //         unit_amount: {
                        //             currency_code: "HKD",
                        //             value: "0.01"
                        //         },
                        //         quantity: "1"
                        //     }
                        // ]
                    }]
                })
            },
            onApprove: async(data, actions) => {
                const order = await(actions.order.authorize());
                
                console.log("Successful order: ");
                console.log(order);
                
                dispatch(transaction({order:order, cart:cartItems, email:email}));

                //send confirmation email
                console.log("confirmation email ", email);
                
                //no email
                if (1 == 2) {
                    axios.post('/api/mail', 
                    {
                        email:email,
                        cart:cartItems,
                        order_id:order.id
                    }).then(response => {
                        // do something with response, and on response
                            console.log("email response:    ", response);
                            // history.push("/path/to/push");
                        }).catch(error => {
                        // do something when request was unsuccessful
                            console.log("email error:   ", error);
                    });
                }

                // cut the stock     
                updateInventory();
                // need to update the product list or can i update the product count within the state?
                setPaidFor(true);
            },
            onError: (err) =>{
                console.log("Paypal error occured:")
                console.log(err);
                setError(err);
            }
        }).render(paypal.current)
    }, []); //[cartItems, dispatch, email, item_details, setPaidFor, ttl]);


    if (paidFor)
    {
        return (
            <div>
                Thanks for making the purchase
            </div>
        )
    }
    // console.log('why keep rendering error: ');
    // console.log(error);
    if (error){
        return (
            <div>Error in processing payment, please try again.</div>
        )
    }
    return (
        <div>
            {/* this refer to the paypal button in the link script from paypal */}
            <div ref={paypal}></div>
        </div>
    )
}
