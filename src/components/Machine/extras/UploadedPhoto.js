import React from 'react';
import '../../../styles/Machine/UploadedPhoto.scss';

const UploadedPhoto = ({image_preview_URL, graphicDelete, graphicActions, lang, edition, reloadPhoto, allowDelete}) => {
    const icon_edit = require('../../../images/icon_edit.png');
    const graphic_close_green = require('../../../images/icon_close_circle_green.png');
    const graphic_close_grey = require('../../../images/icon_close_circle_grey.png');
    return (
        <div className="uploaded-photo">
            {edition && <p className="serial-edition-photo-label">{lang.serial_edition_photo_label}</p>}
            <div className="graphic-frame" style={edition ? {width: 'calc(100% - 20px)'} : {}}>
                {graphicActions && !allowDelete && <img src={graphic_close_green.default} alt="" className="btn_close_circle" onClick={graphicDelete} />}
                {graphicActions && allowDelete && <img src={graphic_close_grey.default} alt="" className="btn_close_circle" />}
                <img src={image_preview_URL} alt="" className="graphic-preview" />
            </div>
            {graphicActions && <div className="edit-bar" onClick={reloadPhoto}>
                <span>{lang.photo_edit_label}</span>
                <img src={icon_edit.default} alt=""/>
            </div>}
        </div>
    );
};

export default UploadedPhoto;