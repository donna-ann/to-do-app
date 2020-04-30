import React, { Component } from 'react';
import './task-board.css'
import TaskList from '../task-list/task-list';
import TaskForm from '../task-form/task-form';

class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: []
    };
  }

  render() {
    return (
      <div id="task-board">
        <TaskForm addTask={this.addTask.bind(this)}></TaskForm>
        <TaskList
          taskList={this.state.taskList}
          removeOrEditTask={this.removeOrEditTask.bind(this)}
        ></TaskList>
      </div>
    )
  }

  addTask(newTask) {
    let list = this.state.taskList;
    list.push({ ...newTask, id: Math.random() });
    this.setState({
      taskList: list
    });
  }

  removeOrEditTask(task) {
    let list = this.state.taskList;
    const index = list.findIndex((taskItem) => {
      return taskItem.id === task.id
    });
    if (list[index].text === task.text) {
      list.splice(index, 1);
    } else {
      list[index].text = task.text;
    }
    this.setState({
      taskList: list
    });
  }
}

export default TaskBoard;