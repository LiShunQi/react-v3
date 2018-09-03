import React, { Component } from 'react';
import { Router, Link } from "@reach/router"
import { Provider } from 'react-redux'
import './App.css';
import Home from './pages/Home'
import AboutContainer from './pages/About'
import store from './store'
import setPath from './utils/path'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
              <nav>
                  <Link to={setPath('/')}>Home 6666</Link> |{" "}
                  <Link to={setPath('/about/123')}>about</Link>
              </nav>
              <Router>
                  <Home path={setPath('/')} />
                  <AboutContainer path={setPath('/about/:id/*')} />
              </Router>
          </div>
      </Provider>
    );
  }
}

export default App;
