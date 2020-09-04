import React from 'react';
import Cart from '../common/Cart';
import Delivery from './Delivery';
import Confirmation from '../common/Confirmation';
import '../../styles/Summary/summary.scss';

const SummaryFrame = ({lang, cart, updateShop, activateSection, customerData}) => {
    return (
        <div className="summary">
            {cart.length > 0 && <Cart lang={lang} cart={cart} updateCart={updateShop}/>}
            <Delivery lang={lang} customerData={customerData} />
            <Confirmation lang={lang} handleConfirm={() => activateSection(1)} handleBack={() => activateSection(3)} readyToConfirm={cart.length > 0} />
        </div>
    );
}

export default SummaryFrame;