//BAsic Without using React Power

import {useState} from 'react';

function App(){
    //defining the useState 
    const [counter, setCounter] = useState(0);

    //increase function
    function increase(){
        setCounter(counter + 1);
    }

    //decrease function

    function decrease(){
        setCounter(counter - 1);
    }

}

return (

    <h1>Counter : {counter} </h1>
    <button onClick={increase}>+Addition</button>
    <button onClick={decrease}>-Minus</button>
    
)

//By using react Power

function App(){
    //defining the useState 
    const [counter, setCounter] = useState(0);

    //increase function
    function increase(oldCountervalue => oldCountervalue + 1){
        
    }
}


//Another way 

return (

    <h1>Counter : {counter} </h1>
    <button onClick={() => setCount(count + 1)}>+Addition</button>
    <button onClick={() => setCount(count - 1)}>-Minus</button>
    
)


