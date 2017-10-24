import React, { Component } from 'react';
import './AddBook.css';
import Menu from './Menu';
import axios from 'axios';
import App from './App';


class AddBookForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            description: ''
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        const variables = {
            input: {
              title: this.state.title,
              author: this.state.author,
              description: this.state.description
            },
          };
        console.log('form is submitted. This is value:', this.state.title);
        console.log('form is submitted. This is value:', variables.input);

        let query = `
        mutation CreateBook($input:CreateBookInput){
          createBook(input: $input) {
            title
          }
        }
      `;


        const formData = new FormData();

        const variablesQuery = JSON.stringify(variables);
        formData.append('query', query);
        formData.append('variables', variablesQuery);



        axios({
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            url: 'http://bookcase.loc/graphql',
            data: formData
        });
    }


    handleTitleChange(event) {
        this.setState({title:event.target.value})
    }

    handleAuthorChange(event) {
        this.setState({author:event.target.value})
    }

    handleDescriptionChange(event) {
        this.setState({description:event.target.value})
    }



    render() {
        return (
            (
                <div>
                    <App/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Автор"
                        value={this.state.author}
                        onChange={this.handleAuthorChange}
                        className="authorField"
                    />
                    <input
                        type="text"
                        placeholder="Название"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        className="authorField"
                    />
                    <input
                        type="text"
                        placeholder="Описание"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        className="authorField"
                    />
                    <button className="submitbBtn">Сохранить</button>
                </form>
                </div>
            )
        )
    }

}


export default AddBookForm;