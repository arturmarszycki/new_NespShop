import React, {Component} from 'react';
import SerialNumber from './SerialNumber';
import ProofOfPurchase from './Form/ProofOfPurchase';
import ModalFrame from '../common/ModalFrame';
import GetInTouch from '../common/GetInTouch';
import PurchaseDetails from './Form/PurchaseDetails';

class MachineForm extends Component {
    state = {
        data: {
            serial_number: '',
            purchase_proof: null,
            purchasing_date: '',
            trade_partner: '',
            retailer_store: '',
            invoice_number: '',
            total_value: ''
        },
        get_in_touch: false,
        formFurther: false,
        formDetails: false
    }
    addSerialNumber = serial_number => {
        this.setState(prevState => ({data: {...prevState.data, serial_number}}), () => {
            this.props.addMachineInfo(this.state.data);
            this.setState({formFurther: true});
        });
    }
    addPurchaseProof = img => {
        this.setState(prevState => ({data: {...prevState.data, purchase_proof: img}}), () => {
            this.props.addMachineInfo(this.state.data);
            this.setState({formDetails: true});
        });
    }
    addPurchaseDetails = details => {
        const {purchasing_date, trade_partner, retailer_store, invoice_number, total_value} = details;
        this.setState(prevState => ({data: {...prevState.data, purchasing_date, trade_partner, retailer_store, invoice_number, total_value}}), () => {
            this.props.addMachineInfo(this.state.data);
            this.props.activateSection(2);
        });
    }
    showHelpModal = () => {
        this.setState({get_in_touch: true});
    }
    hideHelpModal = () => {
        this.setState({get_in_touch: false});
    }
    render() {
        const {data, formFurther, get_in_touch, formDetails} = this.state;
        const {lang} = this.props;
        return (
            <div className="machine-form">
                {!formFurther && <SerialNumber lang={lang} submitSerialNumber={this.addSerialNumber} showHelpModal={this.showHelpModal} />}
                {formFurther && <ProofOfPurchase
                    lang={lang}
                    serial={data.serial_number}
                    submitPurchaseProof={this.addPurchaseProof}
                    data={data}
                    showHelpModal={this.showHelpModal}
                    submitSerialNumber={this.addSerialNumber}
                />}
                {formDetails && <PurchaseDetails lang={lang} submitPurchaseDetails={this.addPurchaseDetails} />}
                {get_in_touch && <ModalFrame hideModal={this.hideHelpModal}><GetInTouch lang={lang} /></ModalFrame>}
            </div>
        );
    }
}

export default MachineForm;