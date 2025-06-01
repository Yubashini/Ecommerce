import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from 'ProductPage';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/product/:id" component={ProductPage} />
            </Switch>
        </Router>

export default App;