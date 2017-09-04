/**
 * Created by pathfinder on 02.09.17.
 */
import React, {Component} from 'react';
//import Menu from './Menu';
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
            proxy: {
                host: 'bookcase.loc',
                port: 80,
            },
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



        /*const instance = axios.create({
            baseURL: 'http://bookcase.loc/qraphql',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });*/


            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

/*

    downloadBooks() {

        const instance = axios.create({
            baseURL: 'http://bookcase.loc/',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        });



        instance.get('/graphql?query=query{books{title,author}}')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


*/






    render() {
        return (
            (
                <form onSubmit={this.downloadBooks}>
                    <button className="submitbBtn">Получить список</button>
                </form>
            )
        )
    }
}


export default BookList;
