import { Link } from "react-router-dom";
import React, { Component } from 'react';
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import Book from "../components/Book/index";
import Card from "../components/Card/index";
import Jumbotron from "../components/Jumbotron/index";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import "./search.css";
import API from "../utils/API";




class Search extends Component {
    state = {
        search: "",
        books: []
    };

    getBooks = () => {
      API.getBooks(this.state.search)
        .then(res =>
          this.setState({
            books: res.data
          })
          )
          .catch(err => {
            console.log(err)
          })
    }

    handleBookSave = id => {
      const book = this.state.books.find(book => book.id === id);
  
      API.saveBook({
        googleId: book.id,
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        link: book.volumeInfo.infoLink,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks.thumbnail
      }).then(() => alert("Book Saved"));
    };

   
 
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        event.preventDefault();
        this.getBooks();
        
      };

    render() {
        
        return (
          <div className="wrappingDiv">
        <Container fluid>
        <Row>
            <Col size="md-10" >
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
                  <div className="showBooks">
                  <Card  style={{   boxShadow: "0 3px 6px darkslategrey, 0 3px 6px darkslategrey" }} >
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Results</h2>
              )}
            </Card>
                </div>
                  </Col>
              </Row>
    
        </Container>
        </div>

        
           
        )
    }
}

export default Search;