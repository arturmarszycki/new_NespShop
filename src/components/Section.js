import React from 'react';
import Machine from '../flow/Machine';
import Shop from '../flow/Shop';
import Customer from './Customer';
import Summary from './Summary';

class Section extends React.Component {
    renderSection = id => {
        const {lang, activateSection} = this.props;
        switch(id) {
            case 1:
                return <Machine lang={lang} activateSection={activateSection} />;
            case 2:
                return <Shop lang={lang} />;
            case 3:
                return <Customer lang={lang} />;
            case 4:
                return <Summary lang={lang} />;
            default:
                return null;
        }
    }
    render() {
        const {content, active, passed} = this.props;
        const activeSection = this.renderSection(active);
        const graphic_checked = require('../images/icon_checked.png');
        return (
            <div className={active === content.id || passed ? 'section active' : 'section'}>
                <div className="section-number-outer">
                    <span className="section-number">{passed ? <img src={graphic_checked.default} alt="" /> : content.id}</span>
                </div>
                <h2>{content.title}</h2>
                {active === content.id && activeSection}
            </div>
        )
    }
}

export default Section;