import React, {Component} from 'react';
import Input_text from './Input_text';
import Input_checkbox from './Input_checkbox';
import CompanyInputs from './CompanyInputs';
import PersonalInputs from './PersonalInputs';
import '../../styles/Customer/customerForm.scss';
import Confirmation from "../common/Confirmation";

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
        delivery_address: false,
        receive_by_email: false,
        receive_by_phone: false,
        confirm_terms: false,
        confirm_policy: false,
        form_ok: false,
        company_inputs: false,
        personal_inputs: false
    }
    saveValue = (val, input) => {
        this.setState({[input]: val}, () => this.validateForm());
        if (input === 'company') {
            this.toggleInputs('company_inputs');
        }
        if (input === 'delivery_address') {
            this.toggleInputs('personal_inputs');
        }
    }
    toggleInputs = input => {
        if (this.state[input]) {
            setTimeout(() => {
                this.setState({[input]: false});
            }, 600);
        } else {
            this.setState({[input]: true});
        }
    }
    validateForm = () => {
        const {customer_title, name, surname, zip_code, city, street_building, flat, floor, country, phone, email} = this.state;
        if (customer_title && name && surname && zip_code && city && street_building && flat && floor && country && phone && email) {
            this.setState({form_ok: true});
        } else {
            this.setState({form_ok: false});
        }
    }
    submitForm = e => {
        e.preventDefault();
        const {customer_title, name, surname, zip_code, city, street_building, flat, floor, country, phone, email, form_ok} = this.state;
        const data = {customer_title, name, surname, zip_code, city, street_building, flat, floor, country, phone, email};
        if (form_ok) {
            this.props.submitCustomerData(data);
            this.props.activateSection(4);
        }
    }
    render() {
        const {lang, activateSection} = this.props;
        const {form_ok, company, delivery_address, personal_inputs, company_inputs} = this.state;
        return (
            <div className="customer-form">
                <p className="customer-form-label">{lang.label_customer_form}</p>
                <form action="">
                    <Input_checkbox label={lang.form_label_company_address} name="company" saveValue={this.saveValue} />
                    {company_inputs && <CompanyInputs lang={lang} saveValue={this.saveValue} company_inputs={company} />}
                    <PersonalInputs lang={lang} saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_phone} name="phone" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_email} name="email" saveValue={this.saveValue} />
                    <Input_text label={lang.form_label_retype_email} name="retype_email" saveValue={this.saveValue} />
                    <Input_checkbox label={lang.form_label_delivery_address} name="delivery_address" saveValue={this.saveValue} />
                    {personal_inputs && <PersonalInputs lang={lang} saveValue={this.saveValue} personal_inputs={delivery_address} />}
                    <Input_checkbox label={lang.form_receive_by_email} name="receive_by_email" saveValue={this.saveValue} chb_special />
                    <Input_checkbox label={lang.form_receive_by_phone} name="receive_by_phone" saveValue={this.saveValue} chb_special />
                    <p className="customer-form-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam asperiores assumenda at cum delectus deleniti distinctio, dolores esse est iure labore natus, neque optio quos recusandae reiciendis rerum unde.</p>
                    <Input_checkbox label={lang.form_label_confirm_terms} name="confirm_terms" saveValue={this.saveValue} chb_term />
                    <Input_checkbox label={lang.form_label_confirm_policy} name="confirm_policy" saveValue={this.saveValue} chb_term />
                    <Confirmation lang={lang} handleConfirm={this.submitForm} handleBack={() => activateSection(2)} readyToConfirm={form_ok} />
                </form>
            </div>
        );
    }
}

export default CustomerForm;