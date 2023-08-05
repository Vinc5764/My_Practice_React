import {Routes,Route} from 'react-router-dom'
import { Home,Gallery,Contact,About,NotFound,Plans,Trainers } from './pages'
import Navbar from "./components/Navbar/Navbar"
import './App.css'



const App = () => {
  return (
    <div className='App-content'>
        <Navbar />
     <div className="container">
      <Routes>
       <Route path='/' element={<Home/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<NotFound/>} />
        <Route path='/plans' element={<Plans/>} />
        <Route path='/trainers' element={<Trainers/>} />
      </Routes>
    </div>
    </div>
  )
}

export default App