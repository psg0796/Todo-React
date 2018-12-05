import React, { Component } from 'react';

class Item extends Component{
  constructor(props) {
    super(props);
    this.state = {
    	value: "",
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick() {
  	this.props.onClick(this.props.id)
  }

  onChange(event){
  	this.setState({value: event.target.value});
  	this.props.onChange(this.props.id,event.target.value);
  }

  render() {
  	this.state.value = this.props.value;
  	return (
        <div>
        <input type="text" placeholder="new" value={this.state.value} onChange={this.onChange}/>
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