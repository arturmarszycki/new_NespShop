import React, {Component} from 'react';

class Prices extends Component {
    render() {
        const {lang} = this.props;
        return (
            <div className="summary-prices">
                <p className="prices-row"><span>{lang.label_subtotal}:</span><span>120,00&euro;</span></p>
                <p className="prices-benefit prices-row"><span>{lang.label_your_benefit}:</span><span>-&euro;20,00</span></p>
                <p className="prices-row"><span>{lang.label_tax}</span><span>20,00&euro;</span></p>
                <p className="prices-row"><span>{lang.label_delivery}</span><span>{lang.label_free}</span></p>
                <p className="prices-total prices-row"><span>{lang.label_total}</span><span>120,00&euro;</span></p>
                <div className="prices-info">
                    <p>{lang.label_includes} 0,24&euro; {lang.label_ecotax}</p>
                    <p>{lang.summary_order_info}</p>
                </div>
            </div>
        );
    }
}

export default Prices;