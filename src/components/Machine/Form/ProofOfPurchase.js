import React, {Component} from 'react';
import InputProof from "./InputProof";
import ModalFrame from '../../common/ModalFrame';
import ProofTypes from '../extras/ProofTypes';
import EditSerialNumber from '../EditSerialNumber';
import '../../../styles/Machine/proofOfPurchase.scss';

class ProofOfPurchase extends Component {
    state = {
        proofTypes: false,
        editSerial: false
    }
    showProofTypes = () => {
        this.setState({proofTypes: true});
    }
    hideModal = () => {
        this.setState({proofTypes: false});
    }
    showEditModal = () => {
        this.setState({editSerial: true});
    }
    hideEditModal = () => {
        this.setState({editSerial: false});
    }
    submitEditedSerial = (num, type) => {
        this.props.submitSerialNumber(num, type);
        this.hideEditModal();
    }
    render() {
        const {lang, submitPurchaseProof, data, showHelpModal} = this.props;
        const {proofTypes, editSerial} = this.state;
        const machine_graphic = require('../../../images/graphic_machine.png');
        const icon_edit = require('../../../images/icon_edit.png');
        return (
            <div className="proof-of-purchase">
                <p className="proof-label">{lang.proof_txt1}</p>
                <p className="proof-machine-label">{lang.proof_my_machine}</p>
                <div className="machine-info">
                    <div className="machine-graphic">
                        <img src={machine_graphic.default} alt="" />
                    </div>
                    <div className="machine-actions">
                        <h3 className="machine-name">CitiZ</h3>
                        <span>{lang.serial_number_label}</span>
                        <p className="machine-sn">{data.serial_number}</p>
                        <div className="edit-bar" onClick={this.showEditModal}>
                            <span>{lang.photo_edit_label}</span>
                            <img src={icon_edit.default} alt="" />
                        </div>
                        <small>{lang.proof_one_machine_requirement}</small>
                    </div>
                </div>
                <div className="input-proof">
                    <InputProof lang={lang} showProofTypes={this.showProofTypes} submitPurchaseProof={submitPurchaseProof} />
                </div>
                {proofTypes && <ModalFrame hideModal={this.hideModal}><ProofTypes lang={lang} showHelpModal={showHelpModal} /></ModalFrame>}
                {editSerial && <ModalFrame hideModal={this.hideEditModal}><EditSerialNumber lang={lang} showHelpModal={showHelpModal} submitSerialNumber={this.submitEditedSerial} /></ModalFrame>}
            </div>
        );
    }
}

export default ProofOfPurchase;