import React, { Component } from 'react';

class Item extends Component{
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.value)
  }

  render() {
    return (
        <div>
        <input type="text" placeholder={this.props.value}/>
        <Button onClick={this.onClick}/>
        </div>
      );
  }
}

function Button(props) {
    return (
      <button onClick={props.onClick}>
      	X
      </button>);
}

export default Item;