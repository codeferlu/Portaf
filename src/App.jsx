import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Home from './views/Home'
import Navbar from './components/Navbar'
import Projects from './views/Projects'
import Work from './views/Work'
import Error from './views/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
    
    


    </>
  )
}

export default App
