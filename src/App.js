import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentList: [],
      todoList: [4,5,6],
      compltdList: [7,8,9],
      type: '1',
    }
    this.change = this.change.bind(this);
    this.add = this.add.bind(this);
    this.modify = this.modify.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentList: this.state.todoList,
    });
  }
  
  change(event) {
    if(event.target.value === '1'){
      this.setState({ currentList: this.state.todoList, type: '1' })
    } else if(event.target.value === '2'){
      this.setState({ currentList: this.state.compltdList, type: '2' })
    }
  }

  modify(type, index, value) {
    if(type === '1') {
      const newList = this.state.todoList;
      newList[index] = value;
      this.setState({ currentList: newList })
      this.setState({ todoList: newList })
    } else if (type === '2') {
      const newList = this.state.compltdList;
      newList[index] = value;
      this.setState({ currentList: newList })
      this.setState({ compltdList: newList })
    }
  }

  add(type){
    const newItem = "";
    if (type === '1') {
      this.setState({
        todoList: this.state.todoList.concat([newItem]),
        currentList: this.state.todoList
      })
    } else {
      console.log("error in add");
    }
  }

  remove(type,index){
    if(type === '1') {
      const newList = this.state.todoList;
      this.setState({ compltdList: this.state.compltdList.concat(newList[index]) });
      newList.splice(index,1);
      this.setState({
        todoList: newList,
        currentList: this.state.todoList
      })
    }
    else {
      console.log("error in remove");
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <fieldset>
            <div>
              <Button onClick={this.change} value='1' name="Todo" />
              <Button onClick={this.change} value='2' name="Completed" />
            </div>
            <List list={this.state.currentList} type={this.state.type} onChange={this.modify} add={this.add} remove={this.remove}/>
          </fieldset>
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
