import React, { Component } from "react";

export default class TaskList extends Component {
  render() {
    return (
      <div className="task-list">
        <ul>
          {this.props.tasklist.map((taskobj) => {
            return (
              <li className="classList" key={taskobj.id}>
                <p>{taskobj.task}</p>
                <button
                  onClick={() => {
                    this.props.deleteTask(taskobj);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
