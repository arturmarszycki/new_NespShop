import React from 'react';
import Barcode from './extras/Barcode';
import '../../styles/barcode.css';
import '../../styles/Machine/InputSerial.scss';

const serialNumbers = ['serialklubnespresso'];
class InputSerial extends React.Component {
    state = {
        serial: '',
        barcode: false,
        error: false,
        confirmed: false,
        inputClasses: '',
        labelClasses: ''
    }
    barcodeLoader = (number, graphic) => {
        if (!this.state.confirmed) {
            this.setState({barcode: true}, () => {
                setTimeout(() => {
                    this.setState({barcode: false, serial: number}, () => {
                        this.confirmSerial(number);
                        if (graphic) {
                            this.props.graphicActions();
                        }
                    });
                }, 2000);
            });
        }
    }
    handleSerial = e => {
        this.setState({serial: e.target.value});
    }
    confirmSerial = number => {
        let correct = serialNumbers.filter(el => el === number);
        if (correct.length) {
            this.setState({error: false, confirmed: true, inputClasses: 'input-correct', labelClasses: 'label-correct'});
        } else {
            this.setState({error: true, confirmed: false, inputClasses: 'input-error', labelClasses: 'label-error'});
        }
    }
    submitSerial = async e => {
        e.preventDefault();
        const {serial, confirmed} = this.state;
        if (confirmed) {
            this.props.submitSerialNumber(this.state.serial, 'serial_number');
        } else {
            await this.barcodeLoader(serial);
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.imagePreview !== prevProps.imagePreview && this.props.imagePreview === null) {
            this.setState({serial: '', confirmed: false, inputClasses: '', labelClasses: ''});
        }
    }

    render() {
        const {serial, error, barcode, confirmed, inputClasses, labelClasses} = this.state;
        const {lang, showSerialHelp, serialGraphicPreview, edition, reloadPhoto} = this.props;
        return (
            <form action="">
                <div className="serial-input">
                    <label htmlFor="serial_number" className={labelClasses}>{lang.serial_number_label}</label>
                    <input
                        type="text"
                        id="serial_number"
                        name="serial_number"
                        placeholder="___________________"
                        autoComplete="off"
                        inputMode="text"
                        className={inputClasses}
                        maxLength={19}
                        value={serial}
                        onChange={this.handleSerial}
                        onBlur={() => this.barcodeLoader(serial)}
                        readOnly={confirmed}
                    />
                    <Barcode startLoader={this.barcodeLoader} serialGraphicPreview={serialGraphicPreview} confirmed={confirmed} reloadPhoto={reloadPhoto} />
                    {barcode && <div className="barcode-loader">
                        <div className="meter animate">
                            <span style={{width: '100%'}}><span>{}</span></span>
                        </div>
                    </div>}
                </div>
                <div className="serial-input-actions">
                    <div className="actions-inner">
                        <div className="error-frame">
                            {error && <span className="error-msg">{lang.error_serial}</span>}
                        </div>
                        {!error && <p className="si-txt4">{lang.serial_confirm_label}</p>}
                        {!edition && <p className="btn_serial-help" onClick={showSerialHelp}>{lang.serial_where_to_find} &gt;</p>}
                    </div>
                    {!confirmed && <button onClick={e => e.preventDefault()}>{lang.btn_confirm}</button>}
                    {confirmed && <button className="btn_confirm_serial" onClick={this.submitSerial}>{lang.btn_confirm}</button>}
                </div>
            </form>
        )
    }
}

export default InputSerial;