import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)

  // let counter = 5
  const addValue = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
    // console.log('clicked', counter)
    // counter += 1
  }

  const redValue = () => {
    // console.log('clicked', counter)
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button><br /><br />
      <button
      onClick={redValue}
      >Remove Value</button>
    </>
  )
}

export default App
