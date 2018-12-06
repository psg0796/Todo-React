import React, { Component } from 'react';
import './App.css';
import List from './List';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentList: [],
      todoList: [],
      compltdList: [],
      type: "todo",
    }
    this.changeList = this.changeList.bind(this);
    this.add = this.add.bind(this);
    this.modify = this.modify.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentList: this.state.todoList,
    });
  }
  
  changeList(event) {
    if(event.target.value === "todo"){
      this.setState({ currentList: this.state.todoList, type: "todo" })
    } else if(event.target.value === "compltd"){
      this.setState({ currentList: this.state.compltdList, type: "compltd" })
    }
  }

  modify(type, index, value) {
    if(type === "todo") {
      const newList = this.state.todoList;
      newList[index] = value;
      this.setState({ currentList: newList })
      this.setState({ todoList: newList })
    } else if (type === "compltd") {
      const newList = this.state.compltdList;
      newList[index] = value;
      this.setState({ currentList: newList })
      this.setState({ compltdList: newList })
    }
  }

  add(type){
    const newItem = "";
    if (type === "todo") {
      const newList = this.state.todoList.concat([newItem]);
      this.setState({
        todoList: newList,
        currentList: newList,
      })
    } else {
      console.log("error in add");
    }
  }

  remove(type,index){
    if(type === "todo") {
      const newList = this.state.todoList;
      this.setState({ compltdList: this.state.compltdList.concat(newList[index]) });
      newList.splice(index,1);
      this.setState({
        todoList: newList,
        currentList: newList,
      })
    }
    else if(type === "compltd") {
      const newList = this.state.compltdList;
      this.setState({ todoList: this.state.todoList.concat(newList[index]) });
      newList.splice(index,1);
      this.setState({
        compltdList: newList,
        currentList: newList,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <fieldset>
            <div>
              <Button onClick={this.changeList} value="todo" name="Todo" />
              <Button onClick={this.changeList} value="compltd" name="Completed" />
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
