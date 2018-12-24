import React, { Component } from 'react';
import List from './List';

class HandleList extends Component {
	componentDidMount() {
		this.props.changeType(this.props.type);
	}
	render() {
		return (
		  <List list={this.props.list} type={this.props.type} onChange={this.props.onChange} add={this.props.add} remove={this.props.remove} />
		);
	}
}

export default HandleList;