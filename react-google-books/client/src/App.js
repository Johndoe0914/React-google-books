import React, { Component } from 'react';
import Navbar from "./components/NavBar/index";
import Search from "./pages/search";
import Saved from "./pages/saved";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (

   <Router>
     <div>
       <Navbar />
       <Switch>
       <Route exact path="/" component={Search} />
       <Route exact path="/search" component={Search} />
       <Route exact path="/saved" component={Saved} />
    
       </Switch>
       </div>
   </Router>
    )
  }
}

export default App;
