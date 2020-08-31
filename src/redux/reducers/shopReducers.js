import {GET_DATA, UPDATE_SHOP_ITEM} from '../actions/shopActions';

const shop = (state = [], action) => {
    switch (action.type) {
        case GET_DATA:
            return state = action.result;
        case UPDATE_SHOP_ITEM:
            let updated = state.map(el => {
                if (el.id_shop_product === action.item.id_shop_product) {
                    return action.item;
                } else {
                    return el;
                }
            });
            return state = updated;
        default:
            return state;
    }
};

export default shop;