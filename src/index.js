/*import React from 'react';
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

), document.getElementById('root'));*/

//registerServiceWorker();

import { createStore } from 'redux';

function playList(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    }
    return state;

}


const store = createStore(playList);

console.log(store.getState());

store.subscribe(() => {
    console.log('subscribe', store.getState());
})

store.dispatch({type: 'ADD_TRACK', payload: 'Smell Like Teen Speret'});
store.dispatch({type: 'ADD_TRACK', payload: 'Enter Sandman'});