import React from 'react';
import InputSerial from './InputSerial';
import SerialHelp from './SerialHelp';
import ModalFrame from '../common/ModalFrame';
import SerialHelpModal from './extras/SerialHelpModal';
import UploadedPhoto from './extras/UploadedPhoto';

class SerialNumber extends React.Component {
    state = {
        serial_help: false,
        serial_help_modal: false,
        image_preview_URL: null,
        graphicActions: false,
        reloadPhoto: false
    }
    showSerialHelp = () => {
        this.setState({serial_help: true, serial_help_modal: true});
    }
    hideSerialHelp = () => {
        this.setState({serial_help_modal: false});
    }
    serialGraphicPreview = graphic => {
        this.setState({image_preview_URL: graphic, reloadPhoto: false});
    }
    graphicDelete = () => {
        this.serialGraphicPreview(null);
        this.setState({graphicActions: false});
    }
    graphicActions = () => {
        this.setState({graphicActions: true, serial_help: false});
    }
    photoReload = () => {
        this.setState({reloadPhoto: true});
    }
    render() {
        const {serial_help, serial_help_modal, image_preview_URL, graphicActions, reloadPhoto} = this.state;
        const {lang, submitSerialNumber, showHelpModal} = this.props;
        return (
            <div className="serial-number">
                <p className="serial-info-txt si-txt1">{lang.serial_info_txt1}</p>
                <p className="serial-info-txt si-txt2">{lang.serial_info_txt2}</p>
                <p className="serial-info-txt si-txt3">{lang.serial_info_txt3}</p>
                <InputSerial
                    lang={lang}
                    submitSerialNumber={submitSerialNumber}
                    showSerialHelp={this.showSerialHelp}
                    serialGraphicPreview={this.serialGraphicPreview}
                    imagePreview={image_preview_URL}
                    graphicActions={this.graphicActions}
                    reloadPhoto={reloadPhoto}
                />
                {serial_help && <SerialHelp lang={lang} />}
                <div className="preview-frame">
                    {image_preview_URL && <UploadedPhoto
                        image_preview_URL={image_preview_URL}
                        graphicDelete={this.graphicDelete}
                        graphicActions={graphicActions}
                        lang={lang}
                        reloadPhoto={this.photoReload}
                    />}
                </div>
                {serial_help_modal && <ModalFrame hideModal={this.hideSerialHelp}><SerialHelpModal lang={lang} showHelpModal={showHelpModal} /></ModalFrame>}
            </div>
        );
    }
}

export default SerialNumber;