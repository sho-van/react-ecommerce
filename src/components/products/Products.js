import React from 'react';
import './Products.css'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Products = (props) => {

    const {name, img, rating, category, price} = props.product

    return (
        <div>
            <div className='single-product'>
                <div className='products-image'>
                    <img src={img} alt="one"/>
                    <span>{category}</span>
                </div>
                <h2>{name}</h2>
                <p className="price">Price: $<span>{price}</span> | Rating: <span>{rating}</span></p>
                <button onClick={()=>props.cartButton(props.product)}><FontAwesomeIcon icon={faCartShopping} className="btn-icon"/>add to cart</button>
            </div>
        </div>
    );
};

export default Products;