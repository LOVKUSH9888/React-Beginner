import { useState } from "react";


//Task : useState in Array

function App() {
  //here tasks  = Variable name
  //setTasks = Function name
  //The initial value of myArray is an array containing an object with an id field set to 1.
  const [tasks, setTasks] = useState([
    { id: 1, name: "Record Lectures", completed: false },
    { id: 2, name: "Record Lectures", completed: true },
    { id: 3, name: "Record Lectures", completed: false },
  ]);

  return (
    <>
      <h1>Task List</h1>
      <ul>

      {/* Use the map() method to iterate over each task in the array */}

        {tasks.map((task) =>(
          <li>
          <span> {task.id} - {task.name} </span>
          <button>Delete</button>
          </li>
        ))}
      </ul>
      
    </>
  );
}

export default App;
