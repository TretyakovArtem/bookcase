/**
 * Created by pathfinder on 02.09.17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import {connect} from 'react-redux';




const styles = {
  headline: {
    fontSize: 14,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  tabs: {
    alignItems:"left"
  },
  slide: {
    padding: 10
  },
  
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
      console.log(props);
      super(props);
      this.state = {
        value: 1,
      };
      console.log(props);
    }



    handleChange = (value, props) => {


      console.log(this.props);
        this.props.dispatch({
          type: "SET_STATE",
          state: {
            val: value
          }
        });

    };


    render() {
      console.log(this.props);
        return (
         
                <Tabs value={this.props.val} onChange={this.handleChange} style={styles.tabs}>
                   {
                    this.props.items.map(
                      ({label, path, value})=><Tab key={label} 
                                            label={label}
                                            to={path}
                                            value={value}
                                            style={styles.slide}
                                            containerElement={<Link to={path}/>}
                                             />
                    )
                  }
                </Tabs>
        );
    }
}

function mapStateToProps(state) {
  return {
    val: state.get("val")
  };
}

export default connect(mapStateToProps)(Menu);