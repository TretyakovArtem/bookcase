/**
 * Created by pathfinder on 02.09.17.
 */
import React, {Component} from 'react';
import Menu from './Menu';
import axios from 'axios';

class BookList extends Component {

    constructor() {
        super();
        this.state = {
            books: []
        };
    }


    downloadBooks() {
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
                    author
                  }
                 }
            `,})

        })

            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    render() {
        return (
            (
                <div>
                    <Menu/>
                <form onSubmit={this.downloadBooks}>
                    <button className="submitbBtn">Получить список (в консоль)</button>
                </form>
                </div>
            )
        )
    }
}


export default BookList;
