import React, { Component } from 'react';
import isEqual from 'lodash';
import PropTypes from 'prop-types';

class Item extends Component{
  constructor(props) {
    super(props);
    this.state = {
    	value: this.props.value,
    }
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

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

Item.propTypes = {
	value: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
}

function Button(props) {
	let btnClass = "btn btn-danger btn-md";
    return (
      <button className={btnClass} onClick={props.onClick}>
      	X
      </button>);
}

export default Item;