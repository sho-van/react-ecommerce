import React from 'react';
import './Products.css'

import one from '../../images/products/002.png'

const Products = () => {
    return (
        <div className='products'>

            <div className='single-product'>
                <div className='products-image'>
                    <img src={one} alt="one"/>
                    <span>fruits</span>
                </div>
                <h2>product name</h2>
                <p className="price">Price: $<span>40</span></p>
                <button>Add to cart</button>
            </div>


            <div className='single-product'>
                <div className='products-image'>
                    <img src={one} alt="one"/>
                    <span>fruits</span>
                </div>
                <h2>product name</h2>
                <p className="price">Price: $<span>40</span></p>
                <button>Add to cart</button>
            </div>


        </div>
    );
};

export default Products;