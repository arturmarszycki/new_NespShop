import React from 'react';

const SetSelection = ({lang, data, fullData}) => {
    const selectionKeys = Object.keys(data.products_in_set);
    const selectionValues = Object.values(data.products_in_set);
    const selectionList = selectionKeys.map(product => {
        return product = fullData.filter(item => item.id_shop_product === Number(product))[0];
    });
    const packetList = selectionList.map((item, index) => {
        const img = require(`../../images/${item.title}.png`);
        return (
            <li key={item.id_shop_product} className="packet-element">
                <img src={img.default} alt="" />
                <p>{item.title}</p>
                <span>({selectionValues[index]})</span>
            </li>
        )
    });
    return (
        <div className="set-selection">
            <h4>{lang.label_set_selection}</h4>
            <ul className="selection-list">{packetList}</ul>
        </div>
    );
}

export default SetSelection;