import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Section from './Section';
import GetInTouch from './common/GetInTouch';
import ModalFrame from './common/ModalFrame';
import HelpAction from './common/HelpAction';
import Details from './Shop/Details';
import Cart from './common/Cart';
import '../styles/common.scss';
import lang from '../languages/language_en';

const sections = [
    {id: 1, title: lang.section_machine_title},
    {id: 2, title: lang.section_shop_title},
    {id: 3, title: lang.section_customer_title},
    {id: 4, title: lang.section_summary_title}
];
class Layout extends React.Component {
    state = {
        active: 3,
        modal_help: false,
        basket: false,
        details: null
    }
    activateSection = id => {
        this.setState({active: id});
    }
    showHelpModal = () => {
        this.setState({modal_help: true});
    }
    hideHelpModal = () => {
        this.setState({modal_help: false});
    }
    showBasket = () => {
        this.setState({basket: true});
    }
    hideBasket = () => {
        this.setState({basket: false});
    }
    showDetails = item => {
        this.setState({details: item});
    }
    hideDetails = () => {
        this.setState({details: null});
    }
    render() {
        const {active, modal_help, basket, details} = this.state;
        const {shop, getData, updateShop, customerData} = this.props;
        const cart = shop.filter(el => el.qty !== 0);
        return (
            <div className="container">
                <Header amount={cart.length} cart={cart} showBasket={this.showBasket} />
                <div className="content">
                    <div className="main-line">{}</div>
                    {sections.map(el => <Section
                        key={el.id}
                        content={el}
                        active={active}
                        activateSection={this.activateSection}
                        lang={lang}
                        passed={active > el.id}
                        updateCart={updateShop}
                        shop={shop}
                        getData={getData}
                        showDetails={this.showDetails}
                        cart={cart}
                        customerData={customerData}
                        showHelpModal={this.showHelpModal}
                    />)}
                </div>
                <HelpAction lang={lang} showHelpModal={this.showHelpModal} />
                {basket && <ModalFrame hideModal={this.hideBasket}><Cart lang={lang} cart={cart} updateCart={updateShop} bag /></ModalFrame>}
                {details && <ModalFrame hideModal={this.hideDetails}><Details
                    lang={lang}
                    item={shop.filter(el => el.id_shop_product === details.id_shop_product)[0]}
                    updateCart={updateShop}
                    showHelpModal={this.showHelpModal}
                    fullData={shop}
                    showDetails={this.showDetails}
                /></ModalFrame>}
                {modal_help && <ModalFrame hideModal={this.hideHelpModal}><GetInTouch lang={lang} /></ModalFrame>}
                <Footer />
            </div>
        )
    }
}

export default Layout;