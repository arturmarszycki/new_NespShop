import React, {Component} from 'react';
import CartElement from './CartElement';
import Prices from './Prices';
import '../../styles/common/cart.scss';

class Cart extends Component {
    render() {
        const {lang, cart, updateCart, bag} = this.props;
        const capsuleList = cart.filter(item => item.product_type === 'capsule').map(item => {
            return <CartElement key={item.id_shop_product} item={item} lang={lang} updateCart={updateCart} />;
        });
        const setList = cart.filter(item => item.product_type === 'set').map(item => {
            return <CartElement key={item.id_shop_product} item={item} lang={lang} updateCart={updateCart} />;
        });
        return (
            <div className="cart">
                {bag && <h3>{lang.label_basket}</h3>}
                {capsuleList.length > 0 && <div className="elements-header">
                    <p>{capsuleList.length} {lang.label_original} {capsuleList.length !== 1 ? lang.label_capsule_sleeve_plural : lang.label_capsule_sleeve_single}</p>
                    <span>{`(${capsuleList.length * 10} ${lang.label_capsules_total})`}</span>
                </div>}
                <ul className="elements-list">
                    {capsuleList}
                </ul>
                {setList.length > 0 && <div className="elements-header">
                    <p>{lang.label_packs}</p>
                </div>}
                <ul className="elements-list">
                    {setList}
                </ul>
                {bag && <div className="cart-subtotal">
                    <span>{lang.label_subtotal}</span>
                    <span>{(capsuleList.length > 0 || setList.length > 0) ? '100,00' : '0,00'}&euro;</span>
                </div>}
                {!bag && <Prices lang={lang} />}
            </div>
        );
    }
}

export default Cart;