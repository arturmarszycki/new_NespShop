import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Section from './Section';
import GetInTouch from './common/GetInTouch';
import ModalFrame from './common/ModalFrame';
import HelpAction from './common/HelpAction';
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
        active: 1,
        modal_help: false
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
    render() {
        const {active, modal_help} = this.state;
        return (
            <div className="container">
                <Header amount={0} />
                <div className="content">
                    <div className="main-line">{}</div>
                    {sections.map(el => <Section key={el.id} content={el} active={active} activateSection={this.activateSection} lang={lang} />)}
                </div>
                <HelpAction lang={lang} showHelpModal={this.showHelpModal} />
                {modal_help && <ModalFrame hideModal={this.hideHelpModal}><GetInTouch lang={lang} /></ModalFrame>}
                <Footer />
            </div>
        )
    }
}

export default Layout;