import React, { Component } from 'react';

class Item extends Component{
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.id)
  }

  onChange(event){
  	this.props.onChange(this.props.id,event.target.value);
  }

  render() {
    return (
        <div>
        <input type="text" placeholder={this.props.value} onChange={this.onChange}/>
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