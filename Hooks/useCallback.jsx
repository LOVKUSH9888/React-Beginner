//This is used to memoize a function so that it is not recreated on every re-render of a component. 
//This can improve performance by preventing unnecessary re-renders and reducing memory usage
import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);


  //By using useCallback to memoize the handleButtonClick function, 
  //we can prevent unnecessary re-renders of the component when the,
  // state variable count changes
  const handleButtonClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
}
