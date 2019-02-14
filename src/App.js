import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/landing/Landing";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Browse from "./components/browse/Browse";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/browse" component={Browse} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
