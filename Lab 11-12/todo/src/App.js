import React, { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [filterCompleted, setFilterCompleted] = useState(false);

  const addTask = (newTask) => {
    setTask([...task, { id: Date.now(), text: newTask, completed: false }]);
  };

  const toggleTask = (id) => {
    setTask(task.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const toggleFilter = () => {
    setFilterCompleted(!filterCompleted);
  };

  const filteredTask = filterCompleted ? task.filter(task => !task.completed) : task;

  return (
    <div>
      <h1>Welcome to my To Do list!</h1>
      <hr/>
      <ToDoList task={filteredTask} toggleTask={toggleTask} />
      <hr/>
      <NewTask addTask={addTask} />
      <Filter checked={filterCompleted} onChange={toggleFilter} />
      {filteredTask.length === 0 && <p>All task completed!</p>}
    </div>
  );
}

function Filter({ checked, onChange }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        Hide completed tasks
      </label>
    </div>
  );
}

function NewTask({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTask(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

function ToDoList({ task, toggleTask }) {
  return (
    <ul>
      {task.map((task) => (
        <Task key={task.id} task={task} onClick={() => toggleTask(task.id)} />
      ))}
    </ul>
  );
}

function Task({ task, onClick }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <label>
        <input type="checkbox" checked={task.completed} onChange={onClick} />
        {task.text}
      </label>
    </li>
  );
}

export default App;