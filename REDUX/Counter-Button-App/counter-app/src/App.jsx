// Importing imp. 
import { UseSelector, useDispatch, useSelector } from "react-redux"
import plusMinus from './Reducers/plusMinus';

// Importing plus & Minus actions
import { plusButton } from "./Actions";
import { minusButton } from "./Actions";

const App = () => {

  // Getting the state
  const myState = useSelector ((state) => state.plusMinus)



  return (
    <div className='text-center'>
      <h1 className='text-bg-dark'>Counter App</h1>
      <h1>{myState}</h1>
      <button onClick={() => dispatch(plusButton())}>Increment</button>
      <button onClick={() => dispatch(minusButton())}>Decrement</button>
    </div>
  )
}

export default App
