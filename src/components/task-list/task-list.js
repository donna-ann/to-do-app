import React from 'react';
import Task from '../task/task';
import './task-list.css';

function TaskList({ taskList, removeOrEditTask }) {
  const list = taskList.map(task => {
    return (
      <Task task={task} key={task.id} removeOrEditTask={removeOrEditTask}></Task>
    )
  });
  return (
    <div id="task-list">
      {list}
    </div>
  )
}

export default TaskList