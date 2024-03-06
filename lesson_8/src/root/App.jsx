import { useCallback, useMemo, useState } from "react"
import Hook from "../compoents/hook"

function App() {
  const [count, setCount] = useState(0)
  const plus = () => {
    setCount(count + 1)
  }
  const minus = () => {
    setCount(count - 1)
  }
  console.log('parent render');
  const data = useMemo(() => {
    return {title:'webbrain'}
  },[])
  const callBack = useCallback((param) => {
    return {title: param};
  })
  return (
    <div>
    <Hook data = {callBack}/>
    <hr /> 
    <center><h1>Parent</h1></center>
    <h1>Count {count}</h1> 
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
    </div>
  )
}

export default App
