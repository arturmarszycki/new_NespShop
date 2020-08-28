import {combineReducers} from 'redux';
import machine from './machineReducers';
import shop from './shopReducers';
import cart from './cartReducers';

export default combineReducers({machine, shop, cart});