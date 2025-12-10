import { useState } from 'react'
import NavigateBar from './Component/NavigateBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigateBar />
    </>
  )
}

export default App
