import React from 'react';

const Datatable_prod = ({data, onBtn}) => {

    // console.log('prod data: ', data);
    return (
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Discount</th>
                        <th>Bundle Discount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data[0] && data.map((d, i) => 
                    <tr key={i}>
                        <td>{d.product_id === undefined ? null :d.product_id}</td>
                        <td>{d.name === undefined ? null :d.name}</td>
                        <td>{d.size === undefined ? null :Object.keys(d.size).map((s,i) => <div key={i} className="dtd">{s}:{d.size[s]}</div>)}</td>
                        <td>{d.discount === undefined ? 0 :d.discount}</td>
                        <td>{d.bundle === undefined ? 0 :d.bundle}</td>
                        <td><button  onClick={(e) => onBtn(e, i)}>Edit</button></td>
                    </tr>
                    )}
                </tbody>
            </table>
        
    );
}
export default Datatable_prod;