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
    this.remove = this.remove.bind(this);
  }

  add(){
    const new_Item = "new";
    this.setState(state => ({
      items: state.items.concat([new_Item])
    }))
  }

  remove(index){
    const items = this.state.items;
    items.splice(index,1);
    this.setState({items});
  }

  render() {
      return (
      <div className="App">
        <header className="App-header">
        <div>Todo</div>
        <List items={this.state.items} onClick={this.remove}/>
        <button onClick={this.add}>+</button>
        </header>
      </div>
    );
  }
}

export default App;
