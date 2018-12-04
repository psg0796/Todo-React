import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
  renderItem(i) {
    return( 
        <li>
          <Item value={this.props.items[i]} onClick={this.props.onClick}/>
        </li>);
  }

  render() {
    return (
        <ul>
          {this.props.items.map((item, index) => this.renderItem(index))}
        </ul>
      )
  }
}

export default List;