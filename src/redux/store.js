import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/combineReducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));