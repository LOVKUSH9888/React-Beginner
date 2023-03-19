import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record Lectures", completed: false },
    { id: 2, name: "Submit Assignments", completed: true },
    { id: 3, name: "Attend Meetings", completed: false },
  ]);

  function handleDelete(id){
    //console.log(id);
    setTasks(tasks.filter(task => task.id !== id));
}

  return (
    <>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
