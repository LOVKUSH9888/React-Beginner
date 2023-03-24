//This hook is used to memoize a value to prevent unnecessary re-renders.
import React, { useState, useMemo } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const isEven = useMemo(() => {
    console.log('Running isEven memo...');
    return count % 2 === 0;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <p>{isEven ? 'Even' : 'Odd'}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
