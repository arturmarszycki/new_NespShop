import React from 'react';

const ModalFrame = ({children, hideModal}) => {
    const image = require('../../images/icon_close.png');
    return (
        <div className="modal-frame">
            <div className="modal-inner" style={children.type.name === 'SerialHelpModal' ? {height: '100%'} : {}}>
                <span className="modal-close" onClick={hideModal}>
                    <img src={image.default} alt="" />
                </span>
                <div className="modal-content" style={children.type.name === 'SerialHelpModal' ? {maxHeight: 'calc(97% + 20px)'} : {}}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalFrame;