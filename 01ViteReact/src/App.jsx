import Test from "./Test"
function App() {
  const username = 'username'

  return (
    <>
    <Test />
    <p>{username}</p> 
    {/* called as evaluated expression */}
    </>
  )
}

export default App
