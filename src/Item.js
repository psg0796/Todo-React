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
         <Button onClick={this.onClick} value={this.props.value} />
        </div>
      );
  }
}

function Button(props) {
    return (
      <button onClick={props.onClick}>
          {props.value}
      </button>);
}

export default Item;