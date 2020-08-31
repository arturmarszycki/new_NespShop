import React from 'react';

const Header = ({amount, showBasket}) => {
    const logo = require('../../images/logo.png');
    const bag = require('../../images/icon_bag.png');
    return (
        <div className="header">
            <div className="hamburger">
                <span>{}</span><span>{}</span><span>{}</span>
            </div>
            <img src={logo.default} alt="" className="logo" />
            <div className="basket-info" onClick={showBasket}>
                <img src={bag.default} alt="" />
                <span className="amount">{amount}</span>
            </div>
        </div>
    )
}

export default Header;