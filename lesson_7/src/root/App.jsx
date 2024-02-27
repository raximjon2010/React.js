import Hook from '../components/hook'
import Navbar from '../components/navbar'
import { data } from '../components/mock';
import { useState } from 'react';
function App() {
  const [Data, setData] = useState(data)
  const onDelete = (id) => {
    setData(Data.filter((val) => val.id !== id))
 }
  return (
     <div>
      <Navbar data = {Data}/>
      <Hook data = {Data} onDelete = {onDelete}/>
     </div>
  )
}

export default App
