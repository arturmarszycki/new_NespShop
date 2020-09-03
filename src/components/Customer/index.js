import React from 'react';
import AnimateHeight from 'react-animate-height';
import CustomerForm from "./CustomerForm";

class Customer extends React.Component {
    state = {
        height: 0
    }
    toggle = () => {
        this.setState({height: this.state.height === 0 ? 'auto' : 0});
    };
    componentDidMount() {
        this.toggle();
    }
    render() {
        const {height} = this.state;
        const {lang, submitCustomerData, activateSection} = this.props;
        return (
            <AnimateHeight duration={500} height={height}>
                <CustomerForm lang={lang} submitCustomerData={submitCustomerData} activateSection={activateSection} />
            </AnimateHeight>
        )
    }
}

export default Customer;