import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './home/home'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Contact from './contact/contact_page'
import { Route, Routes } from "react-router-dom"

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home />
      <Course /> */}
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
