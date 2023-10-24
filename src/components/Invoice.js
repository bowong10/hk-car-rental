import React from 'react';
import { useSelector} from 'react-redux';
import OrderedItem from '../View/OrderedItem';
import './Invoice.css';

const Invoice = () => {
    
    const transaction = useSelector(state => state.transaction);
    const {transactions} = transaction;

    // console.log("transactions", transactions);
    // console.log("transactions.cart", transactions.cart);
    return (
        <>
        {transaction === undefined ? null : transactions.cart === undefined ? null :
        <div className="invoice">
            <div>
                <h3>Thank you for your order!</h3>
            </div>
            <div>
                <div className="imsg">
                    <div style={{paddingBottom:"5px"}}>Hi {transactions.shipping_name}</div>
                    <div>We are delighted that you find the product that you like!</div>
                    <div>A email would be sent to you upon shipping</div>
                </div>
                <div className="isec">
                    <div>
                        
                        <div className="ibo">Delivery Address </div>
                        {transactions.shipping_name}
                        {/* {transactions !== undefined ? transactions.shipping_address !== undefined ? */}
                        {transactions.shipping_address !== undefined ?
                            Object.keys(transactions.shipping_address).map((k)=><div key={k}>{transactions.shipping_address[k]}</div>)
                        :null}
                    </div>
                    <div className="right">
                        
                        <div className="ibo">Order Number</div>
                        <div>{transactions.order_id}</div>
                        
                        <div className="ibo">Order date </div>
                        <div>{transactions.order_date}</div>

                    </div>
                </div>
                <div className="isec" style={{paddingBottom:"0"}}><div className="ibo">Your Ordered item</div></div>
                <div className="ShoppedContainer">
                    <div className="ShoppedCart">
                        {transactions.cart.map((item) => <OrderedItem  key={item.name} item={item} />)}
                        
                    </div>
                </div>
                <div className="paysec">
                    <div className="ilsec"> 
                        <div className="ibo">
                            Payment Method
                        </div>
                        <div className="right">
                            <div>Credit / Debit Card</div>
                        </div>
                    </div>
                    <div className="ilsec"> 
                        <div className="ibo">
                            Shipping Fee
                        </div>
                        <div className="right">
                            <div>Free</div>
                        </div>
                    </div>
                    <div className="ilsec">
                        <div className="ibo">
                            Total
                        </div>
                        <div className="right">
                            <div>{transactions.payment}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Invoice
