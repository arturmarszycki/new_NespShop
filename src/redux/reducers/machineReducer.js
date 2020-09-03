import {ADD_DATA} from '../actions/machineActions';

const machine = (state = {}, action) => {
    switch (action.type) {
        case ADD_DATA:
            return action.info;
        default:
            return state;
    }
}

export default machine;