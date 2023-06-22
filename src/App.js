import React, { Component } from 'react';
import logo from './logo.svg';
import Translators from './components/Translators';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Translator app</h2>
        </div>
        <p className="App-intro">
          <Translators />
        </p>
      </div>
    );
  }
}

export default App;
