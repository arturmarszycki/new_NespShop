import React, {Component} from 'react';
import Input_text from "./Input_text";
import AnimateHeight from 'react-animate-height';

class CompanyInputs extends Component {
    state = {
        height: 0
    }
    toggle = () => {
        this.setState({height: this.state.height === 0 ? 'auto' : 0});
    }
    componentDidMount() {
        this.toggle();
    }
    componentDidUpdate(prevProps) {
        if (this.props.company_inputs !== prevProps.company_inputs) {
            this.toggle();
        }
    }
    render() {
        const {lang, saveValue} = this.props;
        const {height} = this.state;
        return (
            <AnimateHeight duration={500} height={height}>
                <Input_text label={lang.form_label_company_name} name="company_name" saveValue={saveValue} />
                <Input_text label={lang.form_label_tax_id} name="tax_id" saveValue={saveValue} />
            </AnimateHeight>
        );
    }
}

export default CompanyInputs;