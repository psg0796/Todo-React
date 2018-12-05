import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

  constructor(props){
    super(props);
    this.state = {
      items : [],
    }

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.modify = this.modify.bind(this);
  }

  add() {
    const new_Item = "";
    this.setState(state => ({
      items: state.items.concat([new_Item])
    }))
  }

  remove(index) {
    this.state.items.splice(index,1);
    this.setState({ state: this.state });
  }

  modify(index,value) {
    this.state.items[index] = value;
    this.setState({ state: this.state });
  }

  renderItem(index) {
    return(
        <li key={index}>
          <Item id={index} value={this.state.items[index]} onClick={this.remove} onChange={this.modify}/>
        </li>);
  }

  render() {
    return (
      <div>
          <ul>
            {this.state.items.map((item, index) => this.renderItem(index))}
          </ul>
          <button onClick={this.add}>+</button>
        </div>
      )
  }
}

export default List;