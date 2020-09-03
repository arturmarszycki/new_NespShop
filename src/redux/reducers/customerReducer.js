import {SUBMIT_DATA} from '../actions/customerActions';

const customer = (state = {}, action) => {
    switch (action.type) {
        case SUBMIT_DATA:
            return action.data;
        default:
            return state;
    }
}

export default customer;