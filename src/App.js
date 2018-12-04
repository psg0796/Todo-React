import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
    }
    this.add = this.add.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  add(){
    this.setState(state => ({
      items: state.items.concat(['new Item'])
    }))
  }

  handleClick(index){
    const items = this.state.items;
    items.splice(index,1);
    this.setState({items});
  }

  render() {
      return (
      <div className="App">
        <header className="App-header">
        <div>Todo</div>
        <List items={this.state.items} onClick={this.handleClick}/>
        <button onClick={this.add}>+</button>
        </header>
      </div>
    );
  }
}

export default App;
