import React from 'react';
import './task-form.css';

function TaskForm({ addTask }) {

  let newTask = {};
  function handleChange(event) {
    newTask = { text: event.target.value };
  }

  function handleBtnClick() {
    addTask(newTask);
  }

  function handleInputClick(event) {
    event.target.value = '';
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleBtnClick();
      handleInputClick(event)
    }
  }

  return (
    <div id="task-form">
      <input
        type="text"
        onChange={handleChange}
        id="input-box"
        onClick={handleInputClick}
        onKeyDown={handleKeyDown}
        placeholder={"Enter a task"}
      ></input>
      <button type="button" id="add-button" onClick={handleBtnClick}>Add</button>
    </div>
  )
}

export default TaskForm