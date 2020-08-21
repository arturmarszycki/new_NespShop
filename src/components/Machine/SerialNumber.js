import React from 'react';
import InputSerial from './InputSerial';
import SerialHelp from './SerialHelp';
import ModalFrame from '../common/ModalFrame';
import SerialHelpModal from './extras/SerialHelpModal';
import GetInTouch from "../common/GetInTouch";
import SerialNumberPhoto from './extras/SerialNumberPhoto';

class SerialNumber extends React.Component {
    state = {
        serial_help: false,
        serial_help_modal: false,
        get_in_touch: false,
        image_preview_URL: null
    }
    showSerialHelp = () => {
        this.setState({serial_help: true, serial_help_modal: true});
    }
    hideSerialHelp = () => {
        this.setState({serial_help_modal: false});
    }
    showHelpModal = () => {
        this.hideSerialHelp();
        this.setState({get_in_touch: true});
    }
    hideHelpModal = () => {
        this.setState({get_in_touch: false});
    }
    serialGraphicPreview = graphic => {
        this.setState({image_preview_URL: graphic});
    }
    render() {
        const {serial_help, serial_help_modal, get_in_touch, image_preview_URL} = this.state;
        const {lang, submitSerialNumber} = this.props;
        return (
            <div className="serial-number">
                <p className="serial-info-txt si-txt1">{lang.serial_info_txt1}</p>
                <p className="serial-info-txt si-txt2">{lang.serial_info_txt2}</p>
                <p className="serial-info-txt si-txt3">{lang.serial_info_txt3}</p>
                <InputSerial lang={lang} submitSerialNumber={submitSerialNumber} showSerialHelp={this.showSerialHelp} serialGraphicPreview={this.serialGraphicPreview} />
                {serial_help && <SerialHelp lang={lang} />}
                {image_preview_URL && <SerialNumberPhoto lang={lang} image_preview_URL={image_preview_URL} />}
                {serial_help_modal && <ModalFrame hideModal={this.hideSerialHelp}><SerialHelpModal lang={lang} showHelpModal={this.showHelpModal} /></ModalFrame>}
                {get_in_touch && <ModalFrame hideModal={this.hideHelpModal}><GetInTouch lang={lang} /></ModalFrame>}
            </div>
        );
    }
}

export default SerialNumber;