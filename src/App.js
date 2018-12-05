import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  render() {
      return (
      <div className="App">
        <header className="App-header">
        <div>Todo</div>
        <List/>
        </header>
      </div>
    );
  }
}

export default App;
