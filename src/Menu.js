/**
 * Created by pathfinder on 02.09.17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';




const styles = {
  headline: {
    fontSize: 14,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
    width:70
  },
  tabs: {
    width:140
  }
};
const classes = {
  tabLink : {
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
  }
}



class Menu extends Component {

    constructor(props) {
      super(props);
      this.state = {
        value: 1,
      };
      console.log(this.state.value);
    }



    handleChange = (value) => {
      console.log(value);
        this.setState({
          value: value,
        });
    };


    render() {
        return (
         
                <Tabs value={this.state.value} onChange={this.handleChange} style={styles.tabs}>
                   {
                    this.props.items.map(
                      ({label, path, value})=><Tab key={label} 
                                            label={label}
                                            to={path}
                                            value={value}
                                            style={styles.slide}
                                            className={classes.tabLink} 
                                            component={Link} 
                                            to={path}
                                             />
                    )
                  }
                </Tabs>
        );
    }
}


export default Menu;