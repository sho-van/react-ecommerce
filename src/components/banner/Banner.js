import React from 'react';
import './Banner.css'
import banner from '../../images/female-makeup-products.PNG'

const Banner = () => {
    return (
        <div className='banner'>
            <div>
                <p>summer sell</p>
                <h2>get upto <span>70%</span></h2>
                <p>collect your offer using promo code</p>
                <h3>SHOVAN23</h3>
            </div>
            <div>
                <img src={banner} alt="banner"/>
            </div>
        </div>
    );
};

export default Banner;