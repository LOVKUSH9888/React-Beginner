To get started with Redux and Redux Toolkit in a React application, follow these steps:

Install the required dependencies: You need to install redux and react-redux packages for Redux and @reduxjs/toolkit package for Redux Toolkit. You can do this using npm or yarn, depending on your preference.

bash
Copy code
npm install redux react-redux @reduxjs/toolkit
Create a Redux store: In a new file, create a Redux store using the createStore function from the redux package. You also need to create a root reducer that combines all the reducers in your application. The store should be wrapped in a Provider component from the react-redux package to make it available to all the components.

jsx
Copy code
// src/store.js

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
Define your application state: Create a new file for your initial state, which defines the initial values for all the variables that you want to store in the Redux store.

jsx
Copy code
// src/state.js

export const initialState = {
  counter: 0,
  todos: [],
};
Write reducers: Create a new file for each reducer, which is a function that takes the current state and an action and returns a new state. The reducer functions should be combined into a root reducer using the combineReducers function from the redux package.

jsx
Copy code
// src/reducers/counter.js

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

// src/reducers/todos.js

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

// src/reducers/index.js

import { combineReducers } from 'redux';
import counterReducer from './counter';
import todosReducer from './todos';

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export default rootReducer;
Create actions: Create a new file for each action, which is an object that includes a type property and any additional data needed for the action. You can also create action creators, which are functions that return action objects.

jsx
Copy code
// src/actions/counter.js

export const increment = () => ({ type: 'increment' });
export const decrement = () => ({ type: 'decrement' });

// src/actions/todos.js

export const addTodo = (todo) => ({ type: 'add', payload: todo });
export const removeTodo = (todo) => ({ type: 'remove', payload: todo });