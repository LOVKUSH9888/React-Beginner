import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  handleSubmit = () => {
    console.log("-----");
    //navigate("/Home");
    return navigate("/Home");
  }

  return (
    <div>
      <h1>Contact - me</h1>
      <button onClick={handleSubmit}>Back to Home</button>
    </div>
  )
}

export default Contact


