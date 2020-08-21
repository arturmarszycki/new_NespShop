import React from 'react';

const SerialNumberPhoto = ({lang, image_preview_URL}) => {
    const icon_edit = require('../../../images/icon_edit.png');
    return (
        <div className="serial-number-photo">
            <p>{lang.serial_number_photo_label}</p>
            <img src={image_preview_URL} alt="" className="graphic-serial" />
            <div className="edit-bar">
                <span>{lang.photo_edit_label}</span>
                <img src={icon_edit.default} alt="" />
            </div>
        </div>
    );
};

export default SerialNumberPhoto;