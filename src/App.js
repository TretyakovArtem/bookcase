import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import MenuItem from 'material-ui/MenuItem';


import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

        const styles = {
          headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400,
          },
        };


             const classes = { tabLink : {
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }};

        const tabs = [{label:"About", path:"/"}, {label:"Books", path:"/books"}];




class App extends Component {



    render() {
        console.log(tabs)
        return (
            <MuiThemeProvider>
            <div>
                <Menu items={tabs}/> 
            </div>
            </MuiThemeProvider>

        );
    };

}


export default App;