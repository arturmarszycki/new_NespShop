import React, {Component} from 'react';
import InputDate from './InputDate';
import InputSelect from './InputSelect';
import InputText from './InputText';
import '../../../styles/Machine/PurchaseDetails.scss';

class PurchaseDetails extends Component {
    state = {
        purchasing_date: '',
        trade_partner: '1',
        retailer_store: '1',
        invoice_number: '',
        total_value: '',
        ready_to_submit: false
    }
    trade_partner_options = [{title: 'Media Markt', value: '1'}, {title: 'partner 2', value: '2'}, {title: 'partner 3', value: '3'}];
    retailer_store_options = [{title: 'retailer 1', value: '1'}, {title: 'retailer 2', value: '2'}, {title: 'retailer 3', value: '3'}];
    validateDate = date => {
        this.setState({purchasing_date: date});
    }
    validateField = (type, val) => {
        this.setState({[type]: val});
    }
    submitMachineForm = e => {
        e.preventDefault();
        const data = this.state;
        delete data.ready_to_submit;
        this.props.submitPurchaseDetails(data);
    }
    componentDidUpdate() {
        const {purchasing_date, invoice_number, trade_partner, retailer_store, total_value, ready_to_submit} = this.state;
        if (purchasing_date && invoice_number && trade_partner && retailer_store && total_value && !ready_to_submit) {
            this.setState({ready_to_submit: true});
        }
    }
    render() {
        const {lang} = this.props;
        const {purchasing_date, invoice_number, total_value, ready_to_submit} = this.state;
        return (
            <div className="purchase-details">
                <p className="pd-title">{lang.purchase_details_main_label}</p>
                <form action="">
                    <InputDate lang={lang} validatePurchasingDate={this.validateDate} error_msg={purchasing_date ? '' : lang.error_date_couldnt_read} />
                    <InputSelect lang={lang} select_title="trade_partner" handleSelect={this.validateField} options={this.trade_partner_options} />
                    <InputSelect lang={lang} select_title="retailer_store" handleSelect={this.validateField} options={this.retailer_store_options} />
                    <InputText label={lang.label_invoice_number} error_msg={invoice_number ? '' : lang.error_number_couldnt_read} title="invoice_number" validateText={this.validateField} />
                    <InputText label={lang.label_total_value} error_msg={total_value ? '' : lang.error_value_couldnt_read} title="total_value" validateText={this.validateField} />
                    <div className="form-submit-part">
                        {!ready_to_submit && <button onClick={e => e.preventDefault()}>{lang.btn_continue}</button>}
                        {ready_to_submit && <button className="btn_submit_total" onClick={this.submitMachineForm}>{lang.btn_continue}</button>}
                    </div>
                </form>
            </div>
        );
    }
}

export default PurchaseDetails;