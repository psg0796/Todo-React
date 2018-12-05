import React, { Component } from 'react';
import isEqual from 'lodash';

class Item extends Component{
  constructor(props) {
    super(props);
    this.state = {
    	value: this.props.value,
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     value: this.props.value,
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    if (isEqual(this.props.value,nextProps.value) )
    this.setState({
      value: nextProps.value,
    });
  }

  onClick() {
  	this.props.onClick(this.props.id)
  }

  onChange(event) {
  	this.setState({value: event.target.value});
  	this.props.onChange(this.props.id,event.target.value);
  }

  render() {
  	return (
        <div>
        <input type="text" placeholder="new" value={this.state.value} onChange={this.onChange}/>
        <Button onClick={this.onClick} type={this.props.type} />
        </div>
      );
  }
}

function Button(props) {
    if(props.type === '1')
	    return (
	      <button onClick={props.onClick}>
	      	X
	      </button>);
	else 
		return null;
}

export default Item;