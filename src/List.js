import React, { Component } from 'react';
import {isEqual} from 'lodash';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends Component {

  constructor(props){
    super(props);
    this.state = {
     list: this.props.list,
     count: 0,
    }

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.list,nextProps.list) )
    this.setState({
      list: nextProps.list,
    });
  }

  add() {
    this.props.add( this.props.type );
  }

  remove(index) {
    this.props.remove( this.props.type,index );
  }

  onChange(index,value) {
    this.props.onChange(this.props.type, index, value);
  }

  renderItem(index) {
    return(
        <li key={index}>
          <Item id={index} type={this.props.type} value={this.state.list[index]} onClick={this.remove} onChange={this.onChange}/>
        </li>);
  }
  render() {

    return (
      <div>
          <ul>
            {this.state.list.map((item, index) => this.renderItem(index))}
          </ul>
          <Button onClick={this.add} type={this.props.type}/>
        </div>
      )
  }
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['todo','completed']).isRequired,
}

function Button(props) {
  if(props.type === "todo")
    return <button onClick={props.onClick}>+</button>
  else 
    return null;
}

export default List;