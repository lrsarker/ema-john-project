import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="Header">
            <a href="/"><img src={logo} alt=""/></a> 
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Reviews</a>
                <a href="/inventory">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;