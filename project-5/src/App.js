import logo from './logo.svg';
import './App.css';
import Books from './Components/Books';

function App() {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f'];

  return (
    <>
      <Books arrName = {arr}/>
    </>
  );
}

export default App;
