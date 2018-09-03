import React, { Component } from 'react';
import { Router, Link } from "@reach/router"
import { Provider } from 'react-redux'
import './App.css';
import Home from './pages/Home'
import AboutContainer from './pages/About'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
              <nav>
                  <Link to="/">Home 6666</Link> |{" "}
                  <Link to="/about/123">about</Link>
              </nav>
              <Router>
                  <Home path="/" />
                  <AboutContainer path="/about/:id/*" />
              </Router>
          </div>
      </Provider>
    );
  }
}

export default App;
