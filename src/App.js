import React, { Component } from 'react';
import Translators from './components/Translators';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Translator app</h2>
        </div>
        <div className="App-intro">
          <Translators />
        </div>
      </div>
    );
  }
}

export default App;
