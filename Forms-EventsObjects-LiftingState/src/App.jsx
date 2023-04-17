import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleForm/>
    </>
  )
}

export default App
