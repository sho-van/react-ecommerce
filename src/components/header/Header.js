import React from 'react';
import './Header.css'
import logo from '../../images/golden-view.png'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img style={{width: '150px'}} src={logo} alt="logo"/>
            </div>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Policy</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;