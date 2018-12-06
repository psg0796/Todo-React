import React, { Component } from 'react';
import './App.css';
import List from './List';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentList: [],
      todoList: [],
      completedList: [],
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
    if(event.target.value === "todo") {
      this.setState({ currentList: this.state.todoList, type: "todo" })
    } else if(event.target.value === "completed") {
      this.setState({ currentList: this.state.completedList, type: "completed" })
    }
  }

  modify(type, index, value) {
    if(type === "todo") {
      const newList = this.state.todoList;
      newList[index] = value;
      this.setState({ currentList: newList })
      this.setState({ todoList: newList })
    } else if (type === "completed") {
      const newList = this.state.completedList;
      newList[index] = value;
      this.setState({ currentList: newList })
      this.setState({ completedList: newList })
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
      this.setState({ completedList: this.state.completedList.concat(newList[index]) });
      newList.splice(index,1);
      this.setState({
        todoList: newList,
        currentList: newList,
      })
    }
    else if(type === "completed") {
      const newList = this.state.completedList;
      this.setState({ todoList: this.state.todoList.concat(newList[index]) });
      newList.splice(index,1);
      this.setState({
        completedList: newList,
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
              <Button onClick={this.changeList} value="todo" name="Todo" currentType={this.state.type} />
              <Button onClick={this.changeList} value="completed" name="Completed" currentType={this.state.type} />
            </div>
            <List list={this.state.currentList} type={this.state.type} onChange={this.modify} add={this.add} remove={this.remove}/>
          </fieldset>
        </header>
      </div>
    );
  }
}

function Button(props){
  let btnClass = "btn";
  if(props.currentType === props.value)
    btnClass+=" btn-success";
  else
    btnClass+=" btn-info"
  return (
      <button className={btnClass} onClick={props.onClick} id={props.id} value={props.value}>
        {props.name}
      </button>
    )
}

export default App;