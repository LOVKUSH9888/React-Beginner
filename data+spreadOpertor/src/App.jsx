import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "Lovkush",
    age: "22",
    degree: "Btech in CSE",
  });

  const [prev, setPrev] = useState(handleUpdate);

  function handleUpdate() {
    console.log(handleUpdate);
    setStudent({
      name: "Vinod",
      age: "22",
      degree: "BA",
    });
  }

  function handlePrev() {
    console.log(handlePrev);
    setPrev({
      ...student,
      name: "Lovkush",
      age: "22",
      degree: "Btech in CSE",
    });
  }

  return (
    <>
      <h1>Objects & Spread Operator</h1>
      <h2>Name = {student.name}</h2>
      <h3>Age = {student.age}</h3>
      <p>Degree = {student.degree}</p>
      <button onClick={handleUpdate}>Click Me</button>
      <button onClick={handlePrev}>Prev Data</button>
    </>
  );
}

export default App;
