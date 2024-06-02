import React, { useState } from 'react';

export default function TaskCrud() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index, newTask) => {
    const updatedTasks = tasks.map((t, i) => (i === index ? newTask : t));
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => editTask(index, prompt('Edit Task:', t))}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
