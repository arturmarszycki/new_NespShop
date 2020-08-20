import React, {Component} from 'react';
import SerialNumber from './SerialNumber';

class MachineForm extends Component {
    state = {
        serial_number: ''
    }
    addValue = (val, input) => {
        this.setState({[input]: val}, () => this.props.addMachineInfo(this.state));
    }
    render() {
        return (
            <div className="machine-form">
                <SerialNumber lang={this.props.lang} submitSerialNumber={this.addValue} />
            </div>
        );
    }
}

export default MachineForm;