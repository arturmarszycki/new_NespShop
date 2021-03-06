import React, {Component} from 'react';

class Capsule extends Component {
    state = {
        bought: this.props.item.qty,
        product: this.props.item,
        productType: 'capsule'
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
    addPieces = () => {
        const amount = this.state.productType === 'capsule' ? 10 : 1;
        this.setState(prevState => ({bought: prevState.bought + amount}));
    }
    removePieces = () => {
        const amount = this.state.productType === 'capsule' ? 10 : 1;
        this.setState(prevState => ({bought: prevState.bought - amount}));
    }
    defineProductType = () => {
        switch (this.props.item.product_type) {
            case 'capsule':
                this.setState({productType: 'capsule'});
                break;
            case 'set':
                this.setState({productType: 'set'});
                break;
            default:
                this.setState({productType: 'capsule'});
        }
    }
    componentDidMount() {
        this.defineProductType();
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.bought !== prevState.bought) {
            const {bought} = this.state;
            this.setState(prevState => ({product: {...prevState.product, qty: bought}}), () => {
                this.props.updateCart(this.state.product);
            });
        }
        if (this.props.item !== prevProps.item) {
            this.setState({bought: this.props.item.qty, product: this.props.item});
            this.defineProductType();
        }
    }
    render() {
        const {item, lang, showDetails} = this.props;
        const image = item.product_type === 'capsule' ? require(`../../images/${item.title}.png`) : require(`../../images/packet_${item.capsule_count}.png`);
        const add_10 = require('../../images/icon_add.png');
        const remove_10 = require('../../images/icon_remove.png');
        return (
            <li className="single-capsule">
                <img src={image.default} alt="" className="capsule-graphic" />
                <h3 className="capsule-title">{item.title}</h3>
                <p className="capsule-header">Powerful and&nbsp;contrasting&nbsp;coffee</p>
                <p className="product-price">&euro;0.42</p>
                <div className="btn_capsule_details" onClick={() => showDetails(item)}>
                    {lang.btn_read_more}&nbsp;&gt;
                </div>
                <div className="intensity-info">
                    <div className="intensity-graphic">{this.showIntensityGraphic(item.intensity)}</div>
                    <span className="intensity-text">{lang.label_intensity}&nbsp;{item.intensity}</span>
                </div>
                <div className="buy-product">
                    {!item.qty && <button className="btn_buy_now" onClick={this.addPieces}>{lang.btn_buy_now}</button>}
                    {item.qty > 0 && <div className="quantity-action">
                        <img src={remove_10.default} alt="" onClick={this.removePieces} />
                        <span>{item.qty}</span>
                        <img src={add_10.default} alt="" onClick={this.addPieces} />
                    </div>}
                </div>
            </li>
        );
    }
}

export default Capsule;