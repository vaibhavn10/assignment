import './App.css'
import Details from './components/Details'
import Homepage from './components/Homepage'
import Topbar from './components/Topbar'
import {BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Topbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/product/:pid" element={<Details/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
