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
            purchase_proof: null
        },
        get_in_touch: false,
        formFurther: false,
        formDetails: true
    }
    addValue = (val, input) => {
        this.setState(prevState => ({data: {...prevState.data, [input]: val}}), () => {
            this.props.addMachineInfo(this.state.data);
            if (input === 'serial_number') {
                this.setState({formFurther: true});
            }
        });
    }
    addPurchaseProof = img => {
        this.setState(prevState => ({data: {...prevState.data, purchase_proof: img}}), () => {
            this.props.addMachineInfo(this.state.data);
            this.setState({formDetails: true});
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
                {!formFurther && <SerialNumber lang={lang} submitSerialNumber={this.addValue} showHelpModal={this.showHelpModal} />}
                {formFurther && <ProofOfPurchase
                    lang={lang}
                    serial={data.serial_number}
                    submitPurchaseProof={this.addPurchaseProof}
                    data={data}
                    showHelpModal={this.showHelpModal}
                    submitSerialNumber={this.addValue}
                />}
                {formDetails && <PurchaseDetails lang={lang}/>}
                {get_in_touch && <ModalFrame hideModal={this.hideHelpModal}><GetInTouch lang={lang} /></ModalFrame>}
            </div>
        );
    }
}

export default MachineForm;