//passing Data :-
//In React, data can be passed between components using several methods. The primary ways to pass data from parent to child components are through props, and from child to parent components are through callbacks or state management (e.g., Redux or React Context API).


/*1. Passing Data from Parent to Child (Props):

Props (short for properties) are a way to pass data from a parent component to a child component in React.

// In the parent component, you include attributes on the child component, and these attributes are received as props in the child component.*/

// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = 'Hello from Parent!';

  return (
    <div>
      <ChildComponent greeting={message} />
    </div>
  );
};

export default ParentComponent;

// ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  return <p>{props.greeting}</p>;
};

export default ChildComponent;
