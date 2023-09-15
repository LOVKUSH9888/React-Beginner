import { useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState({
    username : "",
    email : "",
    password : ""
  });

  // Making a useState for userAuth that user is valid or not
  // By default we have set it as False -

  const[inputIsValid, setInputIsValid] = useState("")



  function handleChange(event) {
    
    const name = event.target.name
    const value = event.target.value
    console.log(name, value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`name is ${username} & password is ${password}`)

    // Adding Validatio = When input is empty then no submission shown :-
    if(userInput.trim().length === 0){
      // User auth logic
      setInputIsValid(false)
      return
    }
    console.log("submit handler called", data, setData);
    setData("") // for setting it to empty again 
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">username : </label>
        <input type="text" name = "username" placeholder="Enter Your Name" value={data.username} onChange={handleChange} />
        <br />
        <label htmlFor="Email">Email : </label>
        <input type="text" name='email' placeholder="Enter Your Emaill" value={data.email} onChange={handleChange} />
        <br />
        <label htmlFor="Password">Password : </label>
        <input type="text" name='password' placeholder="Enter Your Password" value={data.password} onChange={handleChange}/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
