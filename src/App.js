import React, { PureComponent } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { concat, isEqual, remove } from 'lodash';
import { APP, TODO, COMPLETED } from './Enum';
import HandleList from './HandleList';
import Button from './Button';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      completedList: [],
      type: '',
    };
    this.add = this.add.bind(this);
    this.changeType = this.changeType.bind(this);
    this.modify = this.modify.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(type, elementAdd) {
    const newItem = elementAdd;
    if (isEqual(type, TODO)) {
      let { todoList } = this.state;
      todoList = concat(todoList, newItem);
      this.setState({ todoList });
    } else if (isEqual(type, COMPLETED)) {
      let { completedList } = this.state;
      completedList = concat(completedList, newItem);
      this.setState({ completedList });
    }
  }

  changeType(type) {
    if (isEqual(type, TODO)) {
      this.setState({ type: TODO });
    } else if (isEqual(type, COMPLETED)) {
      this.setState({ type: COMPLETED });
    }
  }

  modify(type, index, value) {
    if (isEqual(type, TODO)) {
      const { todoList } = this.state;
      todoList[index] = value;
      this.setState({ todoList });
    } else if (isEqual(type, COMPLETED)) {
      const { completedList } = this.state;
      completedList[index] = value;
      this.setState({ completedList });
    }
  }

  remove(type, index) {
    let count = -1;
    if (isEqual(type, TODO)) {
      const { todoList } = this.state;
      const elementRemoved = remove(todoList, () => { count += 1; return isEqual(count, index); });
      this.setState({ todoList });
      this.add(COMPLETED, elementRemoved[0]);
    } else if (isEqual(type, COMPLETED)) {
      const { completedList } = this.state;
      const elementRemoved = remove(completedList,
        () => { count += 1; return isEqual(count, index); });
      this.setState({ completedList });
      this.add(TODO, elementRemoved[0]);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="listDisplay">
              <Link to="/todo">
                <Button
                  workingLink={APP}
                  name={TODO}
                  value={TODO}
                  activeType={this.state.type}
                  numOfItems={this.state.todoList.length}
                />
              </Link>
              <Link to="/completed">
                <Button
                  workingLink={APP}
                  name={COMPLETED}
                  value={COMPLETED}
                  activeType={this.state.type}
                  numOfItems={this.state.completedList.length}
                />
              </Link>
              <Route exact path="/" component={() => <HandleList changeType={this.changeType} list={this.state.todoList} type={TODO} onChange={this.modify} add={this.add} remove={this.remove} />} />
              <Route path="/todo" component={() => <HandleList changeType={this.changeType} list={this.state.todoList} type={TODO} onChange={this.modify} add={this.add} remove={this.remove} />} />
              <Route path="/completed" component={() => <HandleList changeType={this.changeType} list={this.state.completedList} type={COMPLETED} onChange={this.modify} add={this.add} remove={this.remove} />} />
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
