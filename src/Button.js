import React, { Component } from 'react';
import { APP, LIST, ITEM, COMPLETED } from './Enum';
import {isEqual} from 'lodash';

var classNames = require('classnames');

class Button extends Component {
  render() {
    var btnClass = classNames(
      { 'btn':true },
      { 'btn-success': ( isEqual(this.props.workingLink, APP) && isEqual(this.props.activeType, this.props.value) )},
      { 'btn-info': ( isEqual(this.props.workingLink, APP) && !isEqual(this.props.activeType, this.props.value) )},
      { 'btn-warning': ( isEqual(this.props.workingLink, LIST) )},
      { 'btn-danger': ( isEqual(this.props.workingLink, ITEM) )},
      { 'btn-sm': ( isEqual(this.props.workingLink, ITEM) )}
      );
    if( isEqual(this.props.type,COMPLETED) && isEqual(this.props.workingLink, LIST) ){
      return null;
    } else {
      return (
          <button className={btnClass} onClick={this.props.onClick} id={this.props.id} value={this.props.value}>
            {this.props.name}
            <span className="badge">{this.props.numOfItems}</span>
          </button>
      ); 
    }
  }
}

export default Button;