import { Link } from "react-router-dom";
import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron/index";
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
        API.getBooks()
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
           <Jumbotron>
               <h1>(React) Google Books search</h1>
           </Jumbotron>
           </Col>
        </Row>
              <Row>
                  <Col size="md-10 sm-12">
                  <Jumbotron>
                      <h3>Saved books</h3>
                  </Jumbotron>
                    {this.state.books.length ? (
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book._id}>
                                <DeleteBtn className="deleteBtn"onClick ={() => this.deleteBook(book._id)} />
                                <Link to="https://youtube.com">
                                    <ViewBtn className="viewBtn"/>
                                </Link>
                                <br></br>
                                <strong>
                                {book.title} 
                                 </strong>
                                 <br></br>
                                by: {book.author}
                                <br></br>
                                {book.description}
                                <br></br>
                                {book.image}
                               
                                
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        <h3>No Books saved</h3>
                    )}

                  </Col>
              </Row>
    
        </Container>
        </div>

        
           
        )
    }
}

export default Saved;