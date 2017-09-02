import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((

        <Router>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            </Switch>
        </Router>

), document.getElementById('root'));

registerServiceWorker();