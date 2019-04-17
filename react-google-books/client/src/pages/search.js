import { Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron/index";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "./search.css";




class Search extends Component {
    state = {
        search: "",
        books: []
    };
    searchBook = () => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+ (this.state.search) +"inauthor:keyes&key=AIzaSyCigDcSCvY6B3sLyNmb3ZfB5rGwcUb8lZE" )
                .then(response => {
                    console.log(response);
                })
                .catch(error =>{
                    console.log(error);
                })
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook();
        
      };

    render() {
        
        return (
          <div className="wrappingDiv">
        <Container fluid>
        <Row>
            <Col size="md-10">
           <Jumbotron>
               <h1>(React) Google Books search</h1>
           </Jumbotron>
           </Col>
        </Row>
        <Row>
            <Col size="md-10 sm-12">
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Search for a book"
              />
              <FormBtn
                disabled={!(this.state.search)}
                onClick={this.handleFormSubmit}
              >
                Search Book
              </FormBtn>
              </form>
              </Col>
              </Row>
              <Row>
                  <Col size="md-10">
                  <Jumbotron>
                      <h3>Books related to {this.state.search}</h3>
                  </Jumbotron>
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book._id}>
                                <Link to={"/books/" + book._id}>
                                <strong>
                                    {book.title} by {book.author}
                                    
                                </strong>
                                {book.description}
                                </Link>
                                
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Results to display</h3>
                    )}

                  </Col>
              </Row>
    
        </Container>
        </div>

        
           
        )
    }
}

export default Search;