import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-body">
        </div>
        <div className="App-footer">
          <strong>
            &copy; 2016 Shinonome inc. All rights reserved
          </strong>
        </div>
      </div>
    );
  }
}

export default App;
