import Home from '../components/Home/index'
import Axios from '../components/axios'
import Dom from '../components/dom'
import About from '../components/About/index'
import Students from '../components/Students/index'
import Contacts from '../components/Contacts/index'
import { Navigate, Route, Routes } from 'react-router-dom'
let Isprivate = localStorage.getItem('active');

function App() {
  return (
    <div>
    <Routes>
      <Route element = {<Dom/>}>
      <Route path='/about' element = {<About/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/contact' element = {<Contacts/>}/>
      <Route path='/student' element = {Isprivate ? <Students/> : <Navigate to={'/home'}/>}/>
      </Route>
      <Route  path='*' element = {<Navigate to={'/home'}/>}/>
    </Routes>
    </div>

  )
}

export default App
