/**
 * Created by pathfinder on 02.09.17.
 */
import React, {Component} from 'react';
import Menu from './Menu';
import axios from 'axios';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
    }


    componentWillMount() {
       
        axios({
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            url: 'http://bookcase.loc/graphql',
            data:
                JSON.stringify({
                query: `
                {
                  books {
                    title,
                    author,
                    id
                  }
                 }
            `,})

        })

            .then(res => {
                console.log(res.data.data.books);
                const books = res.data.data.books;
                console.log(books);
                this.setState({ books });
            })
            .catch(function (error) {
                console.log(error);
            });
            console.log(this.state.books);
    }



    render() {
        return (
            (
                <div>
                    <Menu/>
                <ul>
          {this.state.books.map(item =>
            <li key={item.id}>{item.title}-{item.author}</li>
          )}
        </ul>
                </div>
            )
        )
    }
}


export default BookList;
