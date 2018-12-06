import React, { Component } from 'react';
import './App.css';
import List from './List';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {isEqual} from 'lodash';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentList: [],
      todoList: [],
      completedList: [],
      type: "",
    }
    this.add = this.add.bind(this);
    this.modify = this.modify.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentList: this.state.todoList,
    });
  }
  
  renderTodo = () => {
    if(!isEqual(this.state.type,"todo")) {
      const newState = this.state;
      newState.type = "todo";
      newState.currentList = this.state.todoList;
      this.setState({
        state: newState,
      })
    }
    return <List list={this.state.currentList} type={this.state.type} onChange={this.modify} add={this.add} remove={this.remove} />;
  }

  renderCompleted = () => {
    if(!isEqual(this.state.type,"completed")) {
      const newState = this.state;
      newState.type = "completed";
      newState.currentList = this.state.completedList;
      this.setState({
        state: newState,
      })
    }
    return <List list={this.state.currentList} type={this.state.type} onChange={this.modify} add={this.add} remove={this.remove} />;
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
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              <Link to="/todo">
                <Button className="Button" name="Todo" value="todo" activeType={this.state.type} numOfItems={this.state.todoList.length} />
              </Link>
              <Link to="/completed">
                <Button className="Button" name="Completed" value="completed" activeType={this.state.type} numOfItems={this.state.completedList.length} />
              </Link>
            </div>
            <Route exact path="/" component={this.renderTodo} />
            <Route path="/todo" component={this.renderTodo} />
            <Route path="/completed" component={this.renderCompleted} />
          </header>
        </div>
      </Router>
    );
  }
}

function Button(props){
  let btnClass = "btn";
  if(props.activeType === props.value)
    btnClass+=" btn-success";
  else
    btnClass+=" btn-info"
  return (
      <button className={btnClass} onClick={props.onClick} id={props.id} value={props.value}>
        {props.name}
        <span className="badge">{props.numOfItems}</span>
      </button>
    )
}

export default App;