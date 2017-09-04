import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import BookList from './BookList';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((

        <Router>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
                <Route path="/books" component={BookList} />
            </Switch>
        </Router>

), document.getElementById('root'));

registerServiceWorker();

