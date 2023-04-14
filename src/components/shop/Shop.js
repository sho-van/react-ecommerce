import React from 'react';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import Products from "../products/Products";
import Details from "../details/Details";

const Shop = () => {
    return (
        <div className='shop'>
            <h1>Search your products</h1>
            <div className='search'>
                <input type="text" placeholder='Search products'/>
                <FontAwesomeIcon icon={faCartShopping} className='icon' />
                <span>10</span>
            </div>


            <div className='shop-child'>
                <Products />
                <Details />
            </div>

        </div>
    );
};

export default Shop;