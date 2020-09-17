import React, {Component} from 'react';
import AnimateHeight from "react-animate-height";
import Input_text from "./Input_text";
import Input_select from "./Input_select";

class PersonalInputs extends Component {
    state = {
        height: 0
    }
    options_title = [{name: '', val: 0}, {name: 'Mrs', val: 1}, {name: 'Mr', val: 2}];
    options_country = [{name: 'Netherlands', val: 'nl'}, {name: 'Poland', val: 'pl'}, {name: 'Hungary', val: 'hu'}, {name: 'Switzerland', val: 'ch'}];
    toggle = () => {
        this.setState({height: this.state.height === 0 ? 'auto' : 0});
    }
    componentDidMount() {
        this.toggle();
    }
    componentDidUpdate(prevProps) {
        if (this.props.personal_inputs !== prevProps.personal_inputs) {
            this.toggle();
        }
    }
    render() {
        const {lang, saveValue, personal_inputs} = this.props;
        const {height} = this.state;
        if (!personal_inputs) {
            return (
                <AnimateHeight duration={500} height={height}>
                    <Input_select label={lang.form_label_title} options={this.options_title} name="customer_title" saveValue={saveValue} />
                    <Input_text label={lang.form_label_name} name="name" saveValue={saveValue} />
                    <Input_text label={lang.form_label_surname} name="surname" saveValue={saveValue} />
                    <Input_text label={lang.form_label_zip_code} name="zip_code" saveValue={saveValue} />
                    <Input_text label={lang.form_label_city} name="city" saveValue={saveValue} />
                    <Input_text label={lang.form_label_street_building} name="street_building" saveValue={saveValue} />
                    <div className="inputs50">
                        <Input_text label={lang.form_label_flat} name="flat" saveValue={saveValue} />
                        <Input_text label={lang.form_label_floor} name="floor" saveValue={saveValue} />
                    </div>
                    <Input_select label="" options={this.options_country} name="country" saveValue={saveValue} />
                </AnimateHeight>
            );
        } else {
            return (
                <AnimateHeight duration={500} height={height}>
                    <Input_select label={lang.form_label_title} options={this.options_title} name="customer_title_delivery" saveValue={saveValue} />
                    <Input_text label={lang.form_label_name} name="name_delivery" saveValue={saveValue} />
                    <Input_text label={lang.form_label_surname} name="surname_delivery" saveValue={saveValue} />
                    <Input_text label={lang.form_label_zip_code} name="zip_code_delivery" saveValue={saveValue} />
                    <Input_text label={lang.form_label_city} name="city_delivery" saveValue={saveValue} />
                    <Input_text label={lang.form_label_street_building} name="street_building_delivery" saveValue={saveValue} />
                    <div className="inputs50">
                        <Input_text label={lang.form_label_flat} name="flat_delivery" saveValue={saveValue} />
                        <Input_text label={lang.form_label_floor} name="floor_delivery" saveValue={saveValue} />
                    </div>
                    <Input_select label="" options={this.options_country} name="country_delivery" saveValue={saveValue} />
                </AnimateHeight>
            );
        }
    }
}

export default PersonalInputs;