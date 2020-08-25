import React from 'react';

const UploadedPhoto = ({image_preview_URL, graphicDelete, graphicActions, lang}) => {
    const icon_edit = require('../../../images/icon_edit.png');
    const graphic_close = require('../../../images/icon_close_circle_green.png');
    return (
        <div className="uploaded-photo">
            <div className="graphic-frame">
                {graphicActions && <img src={graphic_close.default} alt="" className="btn_close_circle_green" onClick={graphicDelete}/>}
                <img src={image_preview_URL} alt="" className="graphic-preview" />
            </div>
            {graphicActions && <div className="edit-bar">
                <span>{lang.photo_edit_label}</span>
                <img src={icon_edit.default} alt=""/>
            </div>}
        </div>
    );
};

export default UploadedPhoto;