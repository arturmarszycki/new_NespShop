import React, {Component} from 'react';
import SerialNumber from './SerialNumber';
import ProofOfPurchase from "./Form/ProofOfPurchase";

class MachineForm extends Component {
    state = {
        data: {
            serial_number: '',
            purchase_proof: null
        },
        formFurther: true
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
        });
    }
    render() {
        const {data, formFurther} = this.state;
        const {lang} = this.props;
        return (
            <div className="machine-form">
                {!formFurther && <SerialNumber lang={lang} submitSerialNumber={this.addValue} />}
                {formFurther && <ProofOfPurchase lang={lang} serial={data.serial_number} submitPurchaseProof={this.addPurchaseProof} />}
            </div>
        );
    }
}

export default MachineForm;