import React, {useEffect, useState} from 'react';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import Details from "../details/Details";
import Products from "../products/Products";

const Shop = () => {

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("./api.json")
            .then(response => response.json())
            .then(data => setProducts(data))
    },[])


    return (
        <div className='shop'>
            <h1>Search your products</h1>
            <div className='search'>
                <input type="text" placeholder='Search products'/>
                <FontAwesomeIcon icon={faCartShopping} className='icon' />
                <span>10</span>
            </div>


            <div className='shop-child'>

                <div className='all-products'>
                    {
                        products.map((product) => (
                            <Products product={product} />
                        ))
                    }
                </div>

                <Details />
            </div>

        </div>
    );
};

export default Shop;