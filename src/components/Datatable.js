import React from 'react';

const Datatable = ({data, onAuth, onCapture, onUnauth, onComplete}) => {

        console.log('Trans Data table dta,', data);
    return (
            <table>
                <thead>
                    <tr>
                        <th>Create Date</th>
                        <th>payer_id</th>
                        <th>Transaction ID</th>
                        <th>Transaction Amount</th>
                        <th>Transaction Products</th>
                        <th>Shipping Address</th>
                        <th>Process Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {data[0] && [].concat(data)
                    .sort((a,b) => a.create_time > b.create_time ? -1 : 1)
                    .map((d, i) => 
                    <tr key={i}>
                        <td>{d.create_time}</td>
                        <td>{d.payer_id === undefined ? null :d.payer_id}</td>
                        <td>{d.transaction_id === undefined ? null :d.transaction_id}</td>
                        <td>{d.transaction_amount === undefined ? null :d.transaction_currency + ' ' + d.transaction_amount}</td>
                        <td>
                            <div className="dtd">Name: {d.cart[0].name}</div>
                            <div className="dtd">{d.cart[0].size === undefined ? null : "Size: " + d.cart[0].size}</div>
                            <div className="dtd">{d.cart[0].qty === undefined ? null : "Qty: " + d.cart[0].qty}</div>
                            <div className="dtd">
                                {d.cart[0].additional !== undefined && d.cart[0].additional.length === 0 ? null : 
                                <><div className="addition">Additional:</div>
                                {d.cart[0].additional.map((ad,i) => <div key={i}>{ad.name}</div>)}</>}
                            </div>  
                        </td>
                        <td>{d.shipping_address === undefined ? null :
                            Object.keys(d.shipping_address).map((s,i) => <div key={i} className="dtd">{s}:{d.shipping_address[s]}</div>)
                            }
                        </td>
                        <td>{d.status}</td>
                        <td>
                            <div class="buts">
                                <button  onClick={(e) => onAuth(e, i)}>Authorize</button>
                                {d.status.toLowerCase()==="authorize"? 
                                <>
                                    <button  onClick={(e) => onCapture(e, i)}>Capture</button>
                                    <button  onClick={(e) => onUnauth(e, i)}>Unauthorize</button>
                                </> : null}
                                {d.status.toLowerCase()==="capture"? <button  onClick={(e) => onComplete(e, i)}>Complete</button>: null}
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        
    );
}
export default Datatable;