import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'



function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: 'Kevin',
    age: 21
  }

  let myName = [
    'kevin', 'kyle', 'Geremy'
  ]

  let newArr = [
    1, 2, 3
  ]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 '>Tailwind test</h1>
      {/* <Card channel='react-props' someObj = {myObj} someArr = {newArr} /> */}
      {/* { <Card username = ''react-user' */}
      { <Card username = {myName[0]} btnTxt='click me'/>}
      { <Card username = {myName[1]} />}
      { <Card username = {myName[2]} btnTxt='check me'/>}
    </>
  )
}

export default App
