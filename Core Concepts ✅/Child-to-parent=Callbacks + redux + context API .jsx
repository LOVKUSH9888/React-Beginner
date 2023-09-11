/*Passing Data from Child to Parent (Callbacks):

To pass data from a child component to its parent, you can define callback functions in the parent component and pass them as props to the child.

The child component can then call these callback functions with data as arguments to send data back to the parent.*/

//using callbacks

// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('');

  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <p>Message from Child: {message}</p>
      <ChildComponent onData={handleChildData} />
    </div>
  );
};

export default ParentComponent;

// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  const sendDataToParent = () => {
    props.onData('Hello from Child!');
  };

  return <button onClick={sendDataToParent}>Send Data</button>;
};

export default ChildComponent;



/*Using State Management (Redux or Context API):

For more complex applications with deeply nested components, it might be more efficient to use state management solutions like Redux or the React Context API.

These solutions provide a centralized state that can be accessed and modified by components across the application without having to pass props through multiple layers.*/

//Using Context API:-

// Create a context and provider in a separate file (e.g., DataContext.js)

// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState('');

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};


// ParentComponent.js
import React from 'react';
import { useData } from './DataContext';

const ParentComponent = () => {
  const { data } = useData();

  return <p>Data from Context: {data}</p>;
};

export default ParentComponent;


// ChildComponent.js
import React from 'react';
import { useData } from './DataContext';

const ChildComponent = () => {
  const { setData } = useData();

  const sendDataToParent = () => {
    setData('Hello from Child via Context!');
  };

  return <button onClick={sendDataToParent}>Send Data</button>;
};

export default ChildComponent;
