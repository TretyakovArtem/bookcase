/**
 * Created by pathfinder on 02.09.17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';






class Menu extends Component {
    render() {
        return (
            <div>
                <Link to="/"> Home</Link>
                <Link to="/about"> About</Link>
                <Link to="/books/add"> Add</Link>
                <Link to="/books"> Books</Link>

            </div>
        );
    }
}


export default Menu;