import {GET_DATA} from '../actions/shopActions';

const shop = (state = [], action) => {
    switch (action.type) {
        case GET_DATA:
            return state = action.result;
        default:
            return state;
    }
};

export default shop;