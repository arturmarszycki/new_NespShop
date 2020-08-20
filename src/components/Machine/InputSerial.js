import React from 'react';

const serialNumbers = ['serialklubnespresso'];
class InputSerial extends React.Component {
    state = {
        serial: '',
        error: false
    }
    handleSerial = e => {
        this.setState({serial: e.target.value});
    }
    confirmSerial = number => {
        let correct = serialNumbers.filter(el => el === number);
        if (correct.length) {
            this.setState({error: false});
        } else {
            this.setState({error: true});
        }
    }
    submitSerial = async e => {
        e.preventDefault();
        const {serial, error} = this.state;
        await this.confirmSerial(serial);
        if (!error) {
            this.props.submitSerialNumber(this.state.serial, 'serial_number');
        }
    }
    render() {
        const {serial, error} = this.state;
        const {lang} = this.props;
        return (
            <form action="">
                <div className="serial-input">
                    <label htmlFor="serial_number" className={error ? 'label-error' : ''}>{lang.serial_number_label}</label>
                    <input
                        type="text"
                        id="serial_number"
                        name="serial_number"
                        placeholder="___________________"
                        autoComplete="off"
                        inputMode="text"
                        className={error ? 'input-error' : ''}
                        maxLength={19}
                        value={serial}
                        onChange={this.handleSerial}
                        onBlur={() => this.confirmSerial(serial)}
                    />
                </div>
                <div className="serial-input-actions">
                    <div className="actions-inner">
                        <div className="error-frame">
                            {error && <span className="error-msg">{lang.error_serial}</span>}
                        </div>
                        <p className="si-txt4">{lang.serial_confirm_label}</p>
                        <p className="btn_serial-help">{lang.serial_where_to_find} &gt;</p>
                    </div>
                    <button onClick={this.submitSerial}>{lang.btn_serial_confirm}</button>
                </div>
            </form>
        )
    }
}

export default InputSerial;