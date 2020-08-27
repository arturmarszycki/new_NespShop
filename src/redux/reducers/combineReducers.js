import {combineReducers} from 'redux';
import machine from './machineReducers';
import shop from './shopReducers';

export default combineReducers({machine, shop});