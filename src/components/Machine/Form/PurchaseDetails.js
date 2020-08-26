import React, {Component} from 'react';
import InputDate from './InputDate';
import '../../../styles/Machine/PurchaseDetails.scss';

class PurchaseDetails extends Component {
    state = {
        purchasing_date: '',
        date_error: ''
    }
    validateDate = date => {
        this.setState({purchasing_date: date});
        if (!date) {
            this.setState({date_error: 'PLEASE SELECT'});
        } else {
            this.setState({date_error: ''});
        }
    }
    render() {
        const {lang} = this.props;
        const {date_error} = this.state;
        return (
            <div className="purchase-details">
                <p className="pd-title">{lang.purchase_details_main_label}</p>
                <form action="">
                    <InputDate lang={lang} validatePurchasingDate={this.validateDate} error_msg={date_error} />
                </form>
            </div>
        );
    }
}

export default PurchaseDetails;