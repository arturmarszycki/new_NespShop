import React from 'react';
import AnimateHeight from 'react-animate-height';
import SummaryFrame from "./SummaryFrame";

class Summary extends React.Component {
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
        const {lang, cart, updateCart, activateSection, customerData} = this.props;
        return (
            <AnimateHeight duration={500} height={height}>
                <SummaryFrame lang={lang} cart={cart} updateShop={updateCart} activateSection={activateSection} customerData={customerData} />
            </AnimateHeight>
        )
    }
}

export default Summary;