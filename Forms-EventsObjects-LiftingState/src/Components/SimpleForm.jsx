import React, {useState} from 'react'

function SimpleForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    function handleNameChange(event) {
      setName(event.target.value);
    }
  
    function handlePasswordChange(event) {
      setPassword(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log(`Name: ${name}, Password: ${password}`);
    }
  
    return (
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
    );
  }
  
  export default SimpleForm;
