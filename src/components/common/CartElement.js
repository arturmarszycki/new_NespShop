import React, {Component} from 'react';

class CartElement extends Component {
    state = {
        product: this.props.item,
        quantity: this.props.item.qty
    }
    addTenPieces = () => {
        this.setState(prevState => ({quantity: prevState.quantity + 10}));
    }
    removeTenPieces = () => {
        this.setState(prevState => ({quantity: prevState.quantity - 10}));
    }
    removeFromCart = () => {
        this.setState({quantity: 0});
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.quantity !== prevState.quantity) {
            const {quantity} = this.state;
            this.setState(prevState => ({product: {...prevState.product, qty: quantity}}), () => {
                this.props.updateCart(this.state.product);
            });
        }
    }
    render() {
        const {item, lang} = this.props;
        const {quantity} = this.state;
        const image = item.product_type === 'capsule' ? require(`../../images/${item.title}.png`) : require(`../../images/packet_${item.capsule_count}.png`);
        const add_10 = require('../../images/icon_add.png');
        const remove_10 = require('../../images/icon_remove.png');
        const icon_close = require('../../images/icon_close.png');
        return (
            <li className="cart-element">
                <div className="graphic-part">
                    <img src={image.default} alt="" />
                </div>
                <div className="main-part">
                    <div className="main-part-inner">
                        <div className="main-part-info">
                            <p className="element-name">{item.title}</p>
                            <small>{item.qty / 10} {item.qty !== 10 ? lang.label_capsule_sleeve_plural : lang.label_capsule_sleeve_single} {item.qty} {lang.label_capsules_total}</small>
                        </div>
                        <div className="main-part-action">
                            <div className="quantity-action">
                                <img src={remove_10.default} alt="" onClick={this.removeTenPieces} />
                                <span>{quantity}</span>
                                <img src={add_10.default} alt="" onClick={this.addTenPieces} />
                            </div>
                        </div>
                    </div>
                    <div className="price-part">
                        <img src={icon_close.default} alt="" className="btn_remove_from_cart" onClick={this.removeFromCart} />
                        <p className="element-price">&euro;0.42</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default CartElement;