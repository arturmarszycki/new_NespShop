import React, {Component} from 'react';

class Capsule extends Component {
    showIntensityGraphic = int => {
        let array = [], intensity = int;
        for (let i = 1; i <= 13; i++) {
            let el = intensity > 0 ? <span key={i} className="int-square active-square">{}</span> : <span key={i} className="int-square">{}</span>;
            array.push(el);
            intensity--;
        }
        return array;
    }
    render() {
        const {item, lang} = this.props;
        const image = item.product_type === 'capsule' ? require(`../../images/${item.title}.png`) : require(`../../images/packet_${item.capsule_count}.png`);
        return (
            <li className="single-capsule">
                <img src={image.default} alt="" className="capsule-graphic" />
                <h3 className="capsule-title">{item.title}</h3>
                <p className="capsule-header">Powerful and&nbsp;contrasting&nbsp;coffee</p>
                <p className="product-price">&euro;0.42</p>
                <div className="btn_capsule_details">
                    {lang.btn_read_more}&nbsp;&gt;
                </div>
                <div className="intensity-info">
                    <div className="intensity-graphic">{this.showIntensityGraphic(item.intensity)}</div>
                    <span className="intensity-text">{lang.label_intensity}&nbsp;{item.intensity}</span>
                </div>
                <div className="buy-product">
                    <button className="btn_buy_now">{lang.btn_buy_now}</button>
                </div>
            </li>
        );
    }
}

export default Capsule;