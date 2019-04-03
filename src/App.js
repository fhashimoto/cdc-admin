import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h1>Testando o GitHub Desktop</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
