import React from 'react';

const SerialHelpModal = ({lang}) => {
    return (
        <div className="modal-serial-help">
            <div className="serial-help-labels">
                <h3>{lang.modal_serial_help_title}</h3>
                <p>{lang.serial_help}</p>
            </div>
        </div>
    )
}

export default SerialHelpModal;