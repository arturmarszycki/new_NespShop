import React from 'react';
import {Provider} from 'react-redux';
import Layout from './Layout';
import store from '../redux/store';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Layout} />
                </Switch>
            </Router>
        </Provider>
    )
};

export default App;