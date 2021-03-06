import React, {Component} from 'react';
import UploadedPhoto from "../extras/UploadedPhoto";

class InputProof extends Component {
    state = {
        image: null,
        image_preview_URL: null,
        graphicActions: true,
        confirmed: false
    }
    fileHandler = e => {
        this.setState({image: e.target.files[0]});
        this.fileReader(e.target.files[0]);
    }
    fileReader = file => {
        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({image_preview_URL: reader.result, graphicActions: true});
        }
        reader.readAsDataURL(file);
    }
    submitProof = e => {
        e.preventDefault();
        const {image} = this.state;
        if (image) {
            this.setState({confirmed: true});
            this.props.submitPurchaseProof(image);
        }
    }
    graphicDelete = () => {
        this.setState({graphicActions: false, image_preview_URL: null, image: null});
    }
    render() {
        const {lang, showProofTypes} = this.props;
        const {image, image_preview_URL, graphicActions, confirmed} = this.state;
        const img = require('../../../images/icon_camera.png');
        return (
            <form action="">
                <p className="input-proof-label">{lang.proof_txt2}</p>
                <div className="preview-frame">
                    {image_preview_URL && <UploadedPhoto
                        image_preview_URL={image_preview_URL}
                        graphicDelete={this.graphicDelete}
                        graphicActions={graphicActions}
                        lang={lang}
                        reloadPhoto={() => this.inputElement.click()}
                        allowDelete={confirmed}
                    />}
                </div>
                {!image && <div className="file-input">
                    <div className="input-file-apparition" onClick={() => this.inputElement.click()}>
                        <img src={img.default} alt="" className="icon-camera"/>
                        <span>{lang.proof_upload_image}</span>
                    </div>
                    <div className="help-infos">
                        <small>{lang.proof_compatible_files}</small>
                        <small>{lang.proof_maximum_size}</small>
                    </div>
                </div>}
                <input
                    type="file"
                    name="purchase_proof"
                    id="purchase_proof"
                    onChange={this.fileHandler}
                    accept="image/png, image/jpeg"
                    style={{visibility: 'hidden'}}
                    ref={input => this.inputElement = input}
                />
                <p className="btn_proof-help" onClick={showProofTypes}>{lang.proof_define_type} &gt;</p>
                {!confirmed && <div>
                    {!image && <button onClick={e => e.preventDefault()}>{lang.btn_continue}</button>}
                    {image && <button className="btn_submit_proof" onClick={this.submitProof}>{lang.btn_continue}</button>}
                </div>}
            </form>
        );
    }
}

export default InputProof;