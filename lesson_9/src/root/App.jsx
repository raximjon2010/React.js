import { useState } from 'react'
import Body from '../components/body'
import Index from '../components/webinar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Body/> */}
      <Index />
    </div>
  )
}

export default App
