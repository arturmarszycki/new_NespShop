import React from 'react';
import Layout from './Layout';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Layout} />
            </Switch>
        </Router>
    )
};

export default App;