import { useState } from 'react'
import Body from '../components/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Body/>
    </div>
  )
}

export default App
