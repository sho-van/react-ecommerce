import React from 'react';
import './Details.css'

const Details = (props) => {
    let totalprice = 0
    for (let product of props.cart) {
        totalprice = totalprice + parseInt(product.price)
    }
    return (
        <div className='details'>
            <h1>Product Summary</h1>
            <h3>total selected product {props.cart.length}</h3>
            <h3>Total Amount : ${totalprice}</h3>

            <table>
                <tr>
                    <th>product name</th>
                    <th>price</th>
                </tr>

                {
                    props.cart.map(product => (
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                }


            </table>

            <button className="chk-btn">Proceed to checkout</button>
        </div>
    );
};

export default Details;