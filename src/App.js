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

  change(event) {
    if(event.target.value === '1'){
      this.setState({ current_list: this.state.todo_list })
    } else if(event.target.value === '2'){
      this.setState({ current_list: this.state.compltd_list })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <Button onClick={this.change} value='1' name="Todo" />
          <Button onClick={this.change} value='2' name="Completed" />
        </div>
        <List list={this.state.current_list}/>
        </header>
      </div>
    );
  }
}

function Button(props){
  return (
      <button onClick={props.onClick} value={props.value}>
        {props.name}
      </button>
    )
}
export default App;
