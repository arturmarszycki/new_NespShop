import React from 'react';

const SerialHelp = ({lang}) => {
    const image = require('../../images/serial_help.jpg');
    return (
        <div className="serial-help">
            <p>{lang.serial_help}</p>
            <img src={image.default} alt="" />
        </div>
    );
};

export default SerialHelp;