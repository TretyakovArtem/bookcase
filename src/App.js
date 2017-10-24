import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import ReactDOM from 'react-dom';




class App extends Component {

    constructor () {
        super();
        this.state = {
            drawerOpened: false
        };
    };
    _toggleDrawer () {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        });
    };

    render() {
        return (
            <MuiThemeProvider>
            <div>
                <AppBar title="My App" onLeftIconButtonTouchTap={ () => this._toggleDrawer() } />
                <Drawer open={this.state.drawerOpened} docked ={false} onRequestChange={() => this._toggleDrawer()} />                
            </div>
            </MuiThemeProvider>

        );
    }

}


export default App;