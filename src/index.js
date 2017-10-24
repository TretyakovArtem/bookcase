import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import About from './About';
import BookList from './BookList';
import AddBook from './AddBook';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';

injectTapEventPlugin();



class NewBook extends React.Component{
    render(){
        return (
            (<div>
                    <Switch>
                        <Route path="/books/add" component={AddBook} />
                        <Route path="/books" component={BookList} />
                    </Switch>
            </div>)
        )     
    }
}


ReactDOM.render((

        <Router>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
                <Route path="/books" component={NewBook} />
            </Switch>
        </Router>

), document.getElementById('root'));

registerServiceWorker();

