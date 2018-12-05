import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

  constructor(props){
    super(props);
    this.state = {
     list: this.props.list,
    }

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.modify = this.modify.bind(this);
  }

  add() {
    const new_Item = "";
    this.setState({
      list: this.state.list.concat([new_Item])
    })
  }

  remove(index) {
    this.state.list.splice(index,1);
    this.setState({ state: this.state });
  }

  modify(index,value) {
    this.state.list[index] = value;
    this.setState({ state: this.state });
  }

  renderItem(index) {
    return(
        <li key={index}>
          <Item id={index} value={this.state.list[index]} onClick={this.remove} onChange={this.modify}/>
        </li>);
  }

  render() {
    return (
      <div>
          <ul>
            {this.state.list.map((item, index) => this.renderItem(index))}
          </ul>
          <button onClick={this.add}>+</button>
        </div>
      )
  }
}

export default List;