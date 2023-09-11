import { useState } from "react"

const index = () => {

  const [task, setTask] = useState([])


  const handleAddTodo = () => {
    
  }




  return (
    <>
    {/* Heading */}
      <h1>Todo -App</h1>
      {/* input field */}
      <input type="text" placeholder='enter the tasks' value={inputValue} onChange={handleInputChange}  />
      {/* Button to add the tasks */}
      <button onClick={handleAddTodo}>Add tasks</button>
    </>
  )
}

export default index
