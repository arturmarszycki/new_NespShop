import React from 'react';

const ModalFrame = ({children, hideModal}) => {
    const image = require('../../images/icon_close.png');
    return (
        <div className="modal-frame">
            <div className="modal-inner">
                <span className="modal-close" onClick={hideModal}>
                    <img src={image.default} alt="" />
                </span>
                {children}
            </div>
        </div>
    );
};

export default ModalFrame;