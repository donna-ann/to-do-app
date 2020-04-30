import React from 'react';
import './App.css';
import TaskBoard from './components/task-board/task-board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To Do
      </header>
      <div className="App-body">
        <TaskBoard></TaskBoard>
      </div>
    </div>
  );
}

export default App;
