import React from 'react';

const Banner = () => {
    const img = require('../../../images/banner_example.jpg');
    return (
        <div className="shop-banner">
            <img src={img.default} alt="" />
        </div>
    );
};

export default Banner;