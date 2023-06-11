import ReactDOM from "react-dom/client"

import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [hideCompleted, setHideCompleted] = useState(false);

  function addTask() {
    setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  }

  return (
    <div>
      <h1>Welcome to my To Do list!</h1>
      <Filter hideCompleted={hideCompleted} setHideCompleted={setHideCompleted} />
      <ToDoList tasks={tasks} hideCompleted={hideCompleted} toggleTask={toggleTask} />
      <NewTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
    </div>
  );
}

function Filter({ hideCompleted, setHideCompleted }) {
  return (
    <div>
      <input type="checkbox" checked={hideCompleted} onChange={() => setHideCompleted(!hideCompleted)} />
      <label>Hide completed</label>
    </div>
  );
}

function ToDoList({ tasks, hideCompleted, toggleTask }) {
  const visibleTasks = hideCompleted ? tasks.filter(task => !task.completed) : tasks;

  return (
    <ul>
      {visibleTasks.map(task => <Task key={task.id} task={task} toggleTask={toggleTask} />)}
    </ul>
  );
}

function Task({ task, toggleTask }) {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.name}</span>
    </li>
  );
}

function NewTask({ newTask, setNewTask, addTask }) {
  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"))