import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <nav className="navbar-left">
              <img src={logo} className="App-logo" alt="logo" />
            </nav>
            <nav className="navbar-right">
              <ul className="list list-unstyled list-inline">
                <li><a href="#section1">hoge</a></li>
                <li><a href="#section2">hoge</a></li>
                <li><a href="#section3">hoge</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="App-body">
          <section id="section1">
          </section>
          <section id="section2">
          </section>
          <section id="section3">
          </section>
        </div>
        <footer className="App-footer">
          <strong>
            &copy; 2016 Shinonome inc. All rights reserved
          </strong>
        </footer>
      </div>
    );
  }
}

export default App;
