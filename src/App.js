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

var Provider = require("react-redux").Provider;
var redux = require("redux");
var reducer = require("./reducer");
var actions = require("./actions");
var store = redux.createStore(reducer);



        const styles = {
          headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400
          },
          header: {
            width:100,
            alignItems:"right",
          }
        };


             const classes = { tabLink : {
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
        }};

        const tabs = [{label:"About", path:"/", value:1}, {label:"Books", path:"/books", value:2}];


store.dispatch({
  type: "SET_STATE",
  state: {
    val: 1
  }
});

console.log(store);



class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
             <AppBar showMenuIconButton={false} className="header-title" title="BookCase" titleStyle={styles.header}>
               <Provider store={store}>
                   <Menu items={tabs} /> 
               </Provider>
            </AppBar>  
            </MuiThemeProvider>

        );
    };

}


export default App;