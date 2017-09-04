import React, { Component } from 'react';

import './App.css';
import Menu from './Menu';

import RegistrationForm from './RegistrationForm';


class App extends Component {
    render() {
        return (
            <div>
            <Menu/>
                <div className="container">
                    <RegistrationForm />
                </div>
            </div>

        );
    }

}


export default App;