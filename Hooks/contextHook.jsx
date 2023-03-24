//This hook is used to consume values from a context provider.
import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const { value, setValue } = useContext(MyContext);

  const handleButtonClick = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={handleButtonClick}>Increment</button>
    </div>
  );
}
