import React, {Component} from 'react';
import HelpAction from "../common/HelpAction";
import InputSerial from './InputSerial';
import UploadedPhoto from "./extras/UploadedPhoto";

class EditSerialNumber extends Component {
    state = {
        image_preview_URL: null,
        graphicActions: false,
        reloadPhoto: false
    }
    serialGraphicPreview = graphic => {
        this.setState({image_preview_URL: graphic, reloadPhoto: false});
    }
    graphicActions = () => {
        this.setState({graphicActions: true});
    }
    graphicDelete = () => {
        this.serialGraphicPreview(null);
        this.setState({graphicActions: false});
    }
    photoReload = () => {
        this.setState({reloadPhoto: true});
    }
    render() {
        const {lang, showHelpModal, submitSerialNumber} = this.props;
        const {image_preview_URL, graphicActions, reloadPhoto} = this.state;
        return (
            <div className="edit-serial">
                <InputSerial
                    lang={lang}
                    submitSerialNumber={submitSerialNumber}
                    serialGraphicPreview={this.serialGraphicPreview}
                    imagePreview={image_preview_URL}
                    graphicActions={this.graphicActions}
                    edition
                    reloadPhoto={reloadPhoto}
                />
                <div className="preview-frame">
                    {image_preview_URL && <UploadedPhoto
                        image_preview_URL={image_preview_URL}
                        graphicDelete={this.graphicDelete}
                        graphicActions={graphicActions}
                        lang={lang}
                        edition
                        reloadPhoto={this.photoReload}
                    />}
                </div>
                <div style={{height: '50px'}}>{}</div>
                <HelpAction lang={lang} showHelpModal={showHelpModal} />
            </div>
        );
    }
}

export default EditSerialNumber;