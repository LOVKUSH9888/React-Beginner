import { useState } from "react"
import { useEffect } from "react"

const Form = () => {

    //Creating object to store the data = empty
    const data = {name: "", email: "", password: ""}

    //For handling the data we need the useState now :-)

    const [inputData, setInputData] = useState(data)

    //Creating the flag variable 
    const[flag, setFlag] = useState(false)


    //now using the useEffect

    useEffect (()  => {
        console.log("Registered")
    }, [flag])


    function handleData(e) {
        {/*
        ...inputData = store the Previous state
    
        [e.target.name] = Take it as KEY
    
        e.target.value = Store the value
    */}
        setInputData({...inputData, [e.target.name] : e.target.value})
        console.log(inputData);
    }


    //Defining the handleSubmit now 

    function handleSubmit(e){

        e.preventDefault();

        {/*Now giving the functionality if  its Empty not to submit*/}

        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Mandatory to fill")
        }else{

            setFlag(true)

        }


    }


  return (
    <>
      <h1>Registration Form</h1>
      <form action="" onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="Enter Your Name" name=" Name" value={inputData.name} onChange = {handleData} />
        <br />
        <input type="text" placeholder="Enter Your Email" name="Email" value={inputData.email} onChange = {handleData} />
        <br />
        <input type="text" placeholder="Enter Your Password" name="Password" value={inputData.password} onChange = {handleData} />
      </div>
      <div>
        <button type="Submit">Submit</button>
      </div>
      </form>
    </>
  )
}

export default Form;
