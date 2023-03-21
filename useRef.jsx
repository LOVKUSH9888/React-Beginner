import React, { useRef } from "react";

function MyComponent() {

    //It is used for without rendering - Suppose we wanted to have main focus on our input field then we will use this ref
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.style.color = "blue";
  };

  const handleReset = () => {
    inputRef.current.style.color = "black";
    inputRef.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Change Color</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default MyComponent;



//Another Tested Way:-
import "./styles.css";
import { useRef } from "react";
import { useState } from "react";

export default function App(e) {
  const refElement = useRef("");
  const [name, setName] = useState("Lovkush");
  console.log(refElement);

  function Reset() {
    setName("");
    refElement.current.focus();
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        ref={refElement}
        type="Text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onCLick={Reset}>reset</button>
    </div>
  );
}
