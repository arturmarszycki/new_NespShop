import React, {Component} from 'react';
import Input_text from './Input_text';
import Input_select from './Input_select';
import Input_checkbox from './Input_checkbox';
import '../../styles/Customer/customerForm.scss';

class CustomerForm extends Component {
    state = {
        company: false,
        customer_title: 0,
        name: '',
        surname: '',
        zip_code: '',
        city: '',
        street_building: '',
        flat: '',
        floor: '',
        country: '',
        phone: '',
        email: '',
        retype_email: false,
        form_ok: false
    }
    options_title = [{name: '', val: 0}, {name: 'Mrs', val: 1}, {name: 'Mr', val: 2}];
    options_country = [{name: 'Netherlands', val: 'nl'}, {name: 'Poland', val: 'pl'}, {name: 'Hungary', val: 'hu'}, {name: 'Switzerland', val: 'ch'}];
    saveValue = (val, input) => {
        this.setState({[input]: val}, () => this.validateForm());
    }
    validateForm = () => {
        const {customer_title, name, surname, zip_code, city, street_building, flat, floor} = this.state;
        if (customer_title && name && surname && zip_code && city && street_building && flat && floor) {
            this.setState({form_ok: true});
        } else {
            this.setState({form_ok: false});
        }
    }
    submitForm = e => {
        e.preventDefault();
        const {customer_title, name, surname, zip_code, city, street_building, flat, floor, form_ok} = this.state;
        const data = {customer_title, name, surname, zip_code, city, street_building, flat, floor};
        if (form_ok) {
            this.props.submitCustomerData(data);
            this.props.activateSection(4);
        }
    }
    render() {
        const {lang, activateSection} = this.props;
        const {form_ok} = this.state;
        return (
            <div className="customer-form">
                <p className="customer-form-label">{lang.label_customer_form}</p>
                <form action="">
                    <Input_checkbox label={lang.form_label_company_address} name="company" saveValue={this.saveValue} />
                    <Input_select label={lang.form_label_title} options={this.options_title} name="customer_title" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_name} name="name" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_surname} name="surname" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_zip_code} name="zip_code" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_city} name="city" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_street_building} name="street_building" saveValue={this.saveValue} />
                    <div className="inputs50">
                        <Input_text label={lang.form_label_flat} name="flat" saveValue={this.saveValue} />
                        <Input_text label={lang.form_label_floor} name="floor" saveValue={this.saveValue} />
                    </div>
                    <Input_select label="" options={this.options_country} name="country" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_phone} name="phone" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_email} name="email" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_retype_email} name="retype_email" saveValue={this.saveValue} />
                    <Input_checkbox label={lang.form_label_delivery_address} name="delivery_address" saveValue={this.saveValue} />
                    <Input_checkbox label={lang.form_receive_by_email} name="receive_by_email" saveValue={this.saveValue} chb_special />
                    <Input_checkbox label={lang.form_receive_by_phone} name="receive_by_phone" saveValue={this.saveValue} chb_special />
                    <p className="customer-form-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam asperiores assumenda at cum delectus deleniti distinctio, dolores esse est iure labore natus, neque optio quos recusandae reiciendis rerum unde.</p>
                    <Input_checkbox label={lang.form_label_confirm_terms} name="confirm_terms" saveValue={this.saveValue} chb_term />
                    <Input_checkbox label={lang.form_label_confirm_policy} name="confirm_policy" saveValue={this.saveValue} chb_term />
                    <div className="customer-actions">
                        <button className="btn_back_to_shop" onClick={() => activateSection(2)}>{lang.btn_back}</button>
                        {!form_ok && <button className="btn_go_to_summary btn_disabled">{lang.btn_continue}</button>}
                        {form_ok && <button className="btn_go_to_summary" onClick={this.submitForm}>{lang.btn_continue}</button>}
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomerForm;