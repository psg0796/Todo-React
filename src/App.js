import React, { PureComponent } from 'react';
import './App.css';
import Chart from './chart';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      xValue: 0,
      preXvalue: -1,
      dataList: [],
    };
  }

  onChange = (value) => {
    let newState = this.state;
    newState.preXvalue = this.state.xValue;
    newState.xValue = value;
    this.setState({
      state: newState,
    })
  }

  componentWillMount() {
    var x = -1;
    let newList = [];
    while(x++ < 10) {
      newList.push({id: x,auc: Math.floor((Math.random() * 10) + 1), precision: Math.floor((Math.random() * 10) + 1), recall: Math.floor((Math.random() * 10) + 1)});
    }
    this.setState({
      dataList: newList,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Chart container='container' list={this.state.dataList} xValue={this.state.xValue} preXvalue={this.state.preXvalue} type='spline' onChange={this.onChange} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
