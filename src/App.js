import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_list: [1,2,3],
      todo_list: [4,5,6],
      compltd_list: [7,8,9],
    }
    this.change = this.change.bind(this);
  }

  change(type) {
    if(type === 1){
      this.setState({ current_list: this.state.todo_list })
    } else if(type === 2){
      this.setState({ current_list: this.state.compltd_list })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <button onClick={() => this.change(1)}>
            Todo
          </button>
          <button onClick={() => this.change(2)}>
            Completed
          </button>
        </div>
        <List list={this.state.current_list}/>
        </header>
      </div>
    );
  }
}

export default App;
