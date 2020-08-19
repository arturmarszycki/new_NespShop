import React from 'react';
import Header from './common/header';
import Footer from './common/footer';
import Section from './Section';
import '../styles/common.scss';

const sections = [
    {id: 1, title: 'Machine registration'},
    {id: 2, title: 'Select your offer'},
    {id: 3, title: 'Customer registration'},
    {id: 4, title: 'Order summary'}
];
class Layout extends React.Component {
    state = {
        active: 1
    }
    activateSection = id => {
        this.setState({active: id});
    }
    render() {
        const {active} = this.state;
        return (
            <div className="container">
                <Header amount={0} />
                <div className="content">
                    <div className="main-line">{}</div>
                    {sections.map(el => <Section key={el.id} content={el} active={active} activateSection={() => this.activateSection(el.id)} />)}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout;