import React, {Component} from 'react';

class Capsule extends Component {
    state = {
        bought: 0,
        product: this.props.item
    }
    showIntensityGraphic = int => {
        let array = [], intensity = int;
        for (let i = 1; i <= 13; i++) {
            let el = intensity > 0 ? <span key={i} className="int-square active-square">{}</span> : <span key={i} className="int-square">{}</span>;
            array.push(el);
            intensity--;
        }
        return array;
    }
    addTenPieces = () => {
        this.setState(prevState => ({bought: prevState.bought + 10}));
    }
    removeTenPieces = () => {
        this.setState(prevState => ({bought: prevState.bought - 10}));
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.bought !== prevState.bought) {
            const {bought} = this.state;
            this.setState(prevState => ({product: {...prevState.product, qty: bought}}), () => this.props.updateCart(this.state.product));
        }
    }
    render() {
        const {item, lang} = this.props;
        const {bought} = this.state;
        const image = item.product_type === 'capsule' ? require(`../../images/${item.title}.png`) : require(`../../images/packet_${item.capsule_count}.png`);
        const add_10 = require('../../images/icon_add.png');
        const remove_10 = require('../../images/icon_remove.png');
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
                    {!bought && <button className="btn_buy_now" onClick={this.addTenPieces}>{lang.btn_buy_now}</button>}
                    {bought > 0 && <div className="quantity-action">
                        <img src={remove_10.default} alt="" onClick={this.removeTenPieces} />
                        <span>{bought}</span>
                        <img src={add_10.default} alt="" onClick={this.addTenPieces} />
                    </div>}
                </div>
            </li>
        );
    }
}

export default Capsule;