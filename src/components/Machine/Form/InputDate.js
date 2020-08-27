import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

class InputDate extends Component {
    state = {
        purchasing_date: ''
    }
    handleDate = date => {
        this.setState({purchasing_date: date});
        this.props.validatePurchasingDate(date.toLocaleDateString());
    }
    render() {
        const {purchasing_date} = this.state
        const {lang, error_msg} = this.props;
        return (
            <div className="form-input purchasing-date">
                <label htmlFor="purchasing_date">{lang.label_purchasing_date}</label>
                <DatePicker
                    selected={purchasing_date}
                    onChange={this.handleDate}
                    placeholderText="DD/MM/YYYY"
                    maxDate={new Date()}
                    id="purchasing_date"
                    name="purchasing_date"
                    className={error_msg ? 'input-error' : ''}
                />
                {error_msg && <p><small className="form-warn">{error_msg}</small></p>}
            </div>
        );
    }
}

export default InputDate;