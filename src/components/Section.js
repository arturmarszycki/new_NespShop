import React from 'react';
import Machine from './Machine';
import Shop from './Shop';
import Customer from './Customer';
import Summary from './Summary';

const Section = ({content, active, activateSection}) => {
    const renderSection = id => {
        switch(id) {
            case 1:
                return <Machine />;
            case 2:
                return <Shop />;
            case 3:
                return <Customer />;
            case 4:
                return <Summary />;
            default:
                return null;
        }
    }
    const activeSection = renderSection(active);
    return (
        <div className={active === content.id ? 'section active' : 'section'} onClick={activateSection}>
            <div className="section-number-outer">
                <span className="section-number">{content.id}</span>
            </div>
            <h2>{content.title}</h2>
            {active === content.id && activeSection}
        </div>
    )
}

export default Section;