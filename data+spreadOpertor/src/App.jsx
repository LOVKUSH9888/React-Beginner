import { useState } from 'react'
import './App.css'

function App() {
  const [student, setStudent] = useState({
    name : "Lovkush",
    age : "22",
    degree : "Btech in CSE"
  })

  function handleData(){
    setStudent({
      name : "Vinod",
      age : "22",
      degree : "BA"
    })
  }

  return (
    <>
      <h1>Objects & Spread Operator</h1>
      <h2>Name = {student.name}</h2>
      <h3>Age = {student.age}</h3>
      <p>Degree = {student.degree}</p>
      <button onClick={handleData}>Click Me</button>
    </>
  )
}

export default App
