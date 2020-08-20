import React from 'react';
import InputSerial from './InputSerial';
import SerialHelp from './SerialHelp';
import ModalFrame from '../common/ModalFrame';
import SerialHelpModal from './extras/SerialHelpModal';

class SerialNumber extends React.Component {
    state = {
        serial_help: false
    }
    showSerialHelp = () => {
        this.setState({serial_help: true});
    }
    hideSerialHelp = () => {
        this.setState({serial_help: false});
    }
    render() {
        const {serial_help} = this.state;
        const {lang, submitSerialNumber} = this.props;
        return (
            <div className="serial-number">
                <p className="serial-info-txt si-txt1">{lang.serial_info_txt1}</p>
                <p className="serial-info-txt si-txt2">{lang.serial_info_txt2}</p>
                <p className="serial-info-txt si-txt3">{lang.serial_info_txt3}</p>
                <InputSerial lang={lang} submitSerialNumber={submitSerialNumber} showSerialHelp={this.showSerialHelp} />
                {serial_help && <SerialHelp lang={lang} />}
                {serial_help && <ModalFrame hideModal={this.hideSerialHelp}><SerialHelpModal lang={lang} /></ModalFrame>}
            </div>
        );
    }
}

export default SerialNumber;