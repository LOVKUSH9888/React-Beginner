import React from "react";
import { useState } from "react";

function App() {
  //let count = 0;

  //Its the array Destructuring method
  //count == variable we want to use is state = 0; & setCount is function name

  const [count, setCount] = useState(0);
  console.log(useState(0));

  function handleAdd (){
    /*count += 1;
    console.log(count);*/
    setCount(count+1);

  }

  function handleSub (){
    setCount(count-1);
  }

  function handleReset(){
    setCount(0);
  }


  return (
    <>
    <div className="main">
    <h1>Counter App</h1>
      <p>{count}</p>
      <button onClick={handleAdd} className="add">ADD</button>
      <button onClick={handleSub} className="sub">SUB</button>
      <button onClick={handleReset} className="Reset">RESET</button>
    </div>
      
    </>
  );
}

export default App;
