import {combineReducers} from 'redux';
import machine from './machineReducer';
import shop from './shopReducer';
import customer from './customerReducer';

export default combineReducers({machine, shop, customer});