/**
 * Created by pathfinder on 02.09.17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';




class Menu extends Component {
    render() {
        console.log(this.props.items);
        return (
                <Tabs onChange={this.handleChange}>
                   {
                    this.props.items.map(
                      ({label, path})=><Tab key={label} 
                                            label={label}
                                            to={path}
                                            containerElement={<Link to={path}/>}
                                             />
                    )
                  }
                </Tabs>  
        );
    }
}


export default Menu;