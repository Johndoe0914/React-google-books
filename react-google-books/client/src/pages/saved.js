import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron/index";
import Card from "../components/Card/index";
import Book from "../components/Book/index";
import { List, ListItem } from "../components/List";
import {ViewBtn, DeleteBtn} from "../components/DeleteBtn";
import API from "../utils/API";
import "./saved.css";

class Saved extends Component {
    state = {
        books: []
    };
    componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getSavedBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };

      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
    
   
    render() {
        
        return (
            <div className="wrappingDiv">
        <Container fluid>
        <Row>
            <Col size="md-10">
           <Jumbotron >
               <h1>(React) Google Books search</h1>
           </Jumbotron>
           </Col>
        </Row>
              <Row>
                  <Col size="md-10 sm-12">
                  <Jumbotron>
                      <h3>Saved books</h3>
                  </Jumbotron>
                  <div className="savedBooks">
                  <Card >
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.deleteBook(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          X
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
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

export default Saved;