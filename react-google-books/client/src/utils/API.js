import axios from "axios";


export default {
    getBooks: function(){
        return axios.get("/api/books");
      },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
      },
      // Deletes the book with the given id
      deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
      },
      // Saves a book to the database
      saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
      },
      searchBooks: function(){
          return axios.get("https://www.googleapis.com/books/v1/volumes?q=searchterms")
      }
};