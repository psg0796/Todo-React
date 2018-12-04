import React, { Component } from 'react';
import './App.css';

function Item(props){
  return (
      <div>
        <button onClick={props.onClick}>
          {props.value}
        </button>
        <button onClick={props.onClick}>
          X
        </button>
        
      </div>
    );
}

class List extends Component {
  renderItem(i) {
    return <Item value={this.props.items[i]}
    onClick={()=>this.props.onClick(i)}/>;
  }

  render() {
    let i = 0;
    const listItems = this.props.items.map((item,index)=>
        <li key={index}>
          {this.renderItem(i)}
          {i++}
        </li>
      );
    return (
        <ul>
          {listItems}
        </ul>
      )
  }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : Array(0),
    }
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
        <List items={this.state.items} onClick={(i)=>this.handleClick(i)}/>
        <button onClick={()=> this.add()}>+</button>
        </header>
      </div>
    );
  }
}

export default App;
