import React, { Component } from 'react';
import Item from './Item';

class List extends Component {

  constructor(props){
    super(props);
    this.state = {
     list: [],
     count: 0,
    }

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.modify = this.modify.bind(this);
  }

  componentDidMount() {
    this.setState({
      list: this.props.list,
    });
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps.list);
    // if (this.props.list )
    this.setState({
      list: nextProps.list,
    });
  }

  add() {
    const new_Item = "";
    this.setState({
      list: this.state.list.concat([new_Item])
    })
  }

  remove(index) {
    const new_list = this.state.list;
    new_list.splice(index,1);
    this.setState({ state: new_list });
  }

  modify(index,value) {
    const new_list = this.state.list;
    new_list[index] = value;
    this.setState({ list: new_list });
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