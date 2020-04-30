import React, { useState } from 'react';
import './task.css'
function Task({ task, removeOrEditTask }) {
  let updatedTask;
  const [editMode, updateEditMode] = useState(false);
  function handleDelete() {
    removeOrEditTask(task);
  }

  function handleEdit() {
    updateEditMode(!editMode)
  }

  function toggleEditMode(task) {
    if (editMode) {
      return (
        <input type="text" onChange={handleInputChange} onKeyDown={handleKeyDown}></input>
      )
    }
    return (<div className="task-description"> {task.text} </div>)
  }

  function handleInputChange(event) {
    updatedTask = { text: event.target.value, id: task.id };
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      removeOrEditTask(updatedTask);
      updateEditMode(!editMode);
    }
  }

  return (
    <div className="task">
      {toggleEditMode(task)}
      <div className="btns">
        <div className="delete-btn" onClick={handleDelete}> Delete </div>
        <div className="edit-btn" onClick={handleEdit}> Edit </div>
      </div>
    </div>
  )
}

export default Task