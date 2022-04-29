import React, { Component } from 'react';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Eva',
      toDoItems: [
        { action: 'Clean', done: false },
        { action: 'Do Yoga', done: false },
        { action: 'go to bed', done: false },
      ],
      newToDo: '',
    };
  }

  toggleDone = (toDo) => {
    this.setState({
      toDoItems: this.state.toDoItems.map((item) =>
        item.action === toDo.action ? { ...item, done: !item.done } : item
      ),
    });
  };
  toDoRows = () =>
    this.state.toDoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input type="checkbox" checked={item.done} onChange={() => this.toggleDone(item)} />
        </td>
      </tr>
    ));

  updateValue = (event) => {
    this.setState({ newToDo: event.target.value });
  };

  print = () => {
    console.log();
  };

  updateToDo = () => {
    this.setState({
      toDoItems: [...this.state.toDoItems, { action: this.state.newToDo, done: false }],
    });
  };

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="bg-primary text-white text-center p2">{this.state.userName} To do App</h2>
        </div>
        <div className="col-12">
          <input className="form-control" value={this.state.newToDo} onChange={this.updateValue} />
          <button className="btn btn-primary" onClick={this.updateToDo}>
            Add
          </button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>

            <tbody>{this.toDoRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
