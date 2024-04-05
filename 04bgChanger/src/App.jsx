import { useState } from "react"

// onclick needs function and if we use onclick = {setcolor} it will give return
// value, so that we have to use onclick = {() => setColor('red')}
function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'red', color:"black"}}>Red</button>
            <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'green', color:"black"}}>Green</button>
            <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'blue', color:"black"}}>Blue</button>
            <button onClick={() => setColor('olive')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'olive', color:"black"}}>Olive</button>
            <button onClick={() => setColor('grey')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'grey', color:"black"}}>Grey</button>
            <button onClick={() => setColor('yellow')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'yellow', color:"black"}}>Yellow</button>
            <button onClick={() => setColor('pink')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'pink', color:"black"}}>Pink</button>
            <button onClick={() => setColor('purple')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'purple', color:"black"}}>Purple</button>
            <button onClick={() => setColor('lavender')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'lavender', color:"black"}}>Lavender</button>
            <button onClick={() => setColor('white')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'white', color:"black"}}>White</button>
            <button onClick={() => setColor('black')} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: 'black', color:"white"}}>Black</button>
          </div>
      </div>
    </div>
  )
}

export default App
