import React from 'react';
import HelpAction from '../../common/HelpAction';
import '../../../styles/modals/serialHelp.scss';

const SerialHelpModal = ({lang, showHelpModal}) => {
    const machine = require('../../../images/graphic_machine.png');
    const serial_ = require('../../../images/serial_help.jpg');
    return (
        <div className="modal-serial-help">
            <h3>{lang.modal_serial_help_title}</h3>
            <img src={machine.default} alt="" className="graphic-machine" />
            <p>{lang.serial_help}</p>
            <img src={serial_.default} alt="" className="graphic-serial" />
            <HelpAction lang={lang} showHelpModal={showHelpModal} />
        </div>
    )
}

export default SerialHelpModal;