import React, { Component } from "react";
import TaskList from "./TaskList";
export default class Todo extends Component {
  state = {
    tasklist: [],
    curr_task: "",
  };
  deleteTask = (curr_task) => {
    let filtered_array = this.state.tasklist.filter((task) => {
      return task.id !== curr_task.id;
    });
    // when then setState encounters or
    //any state goes to any change then the react
    //will rendered it on the browser
    this.setState({
      tasklist: filtered_array,
    });
  };
  handleCurrtask = (e) => {
    let currValue = e.target.value;
    this.setState({
      curr_task: currValue,
    });
  };
  addTask = () => {
    let array = this.state.tasklist;
    array.push({ id: this.state.tasklist.length, task: this.state.curr_task });
    this.setState({
      curr_task: "",
      tasklist: array,
    });
  };
  render() {
    return (
      <div>
        <div className="input-container">
          <input
            type="text"
            value={this.state.curr_task}
            onChange={(e) => {
              this.handleCurrtask(e);
            }}
          />
          <button
            onClick={() => {
              this.addTask();
            }}
          >
            Submit
          </button>
        </div>
        {/* here we have to write {} for evaluation for jsx */}
        <TaskList tasklist={this.state.tasklist} deleteTask={this.deleteTask}>
          {" "}
        </TaskList>
      </div>
    );
  }
}
