import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record Lectures", completed: false },
    { id: 2, name: "Submit Assignments", completed: true },
    { id: 3, name: "Attend Meetings", completed: false },
  ]);

  //Now giving the condition to show or not the tasks

  const [show, setShow] = useState (false); //Here I can give it to True-all task will be visible

  function handleDelete(id){
    //console.log(id);
    setTasks(tasks.filter(task => task.id !== id));
}

  return (
    <>
      <h1>Task List</h1>
      <ul>
        <button onClick={() => setShow(!show)}>Toggle</button>
        {show && tasks.map((task) => (
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


//Read about filters
/*import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const filteredItems = items.filter(item => item.name.includes('2'));

  return (
    <div>
      <h1>Filtered Items</h1>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
*/