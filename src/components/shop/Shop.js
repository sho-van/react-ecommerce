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


    // add to cart button function

    const [cart, setCounter] = useState([])
    const cartButton = (product) => {
        const newCart = [...cart, product]
        setCounter(newCart)
    }


    //search product
    const changeInput = (event) => {
        const userInput = event.target.value
        // eslint-disable-next-line array-callback-return
        const filteredProduct = products.filter((product) =>
            product.name.toLowerCase().includes(userInput.toLowerCase())
        )
        setProducts(filteredProduct)

    }

    return (
        <div className='shop'>
            <h1>Search your products</h1>
            <div className='search'>
                <input onChange={changeInput} type="text" placeholder='Search products'/>
                <FontAwesomeIcon icon={faCartShopping} className='icon' />
                <span>{cart.length}</span>
            </div>


            <div className='shop-child'>

                <div className='all-products'>
                    {
                        products.map((product) => (
                            <Products cartButton={cartButton} key={product.id} product={product} />
                        ))
                    }
                </div>

                <Details cart={cart} />
            </div>

        </div>
    );
};

export default Shop;