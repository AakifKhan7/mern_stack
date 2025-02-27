import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './home/home'
import Courses from './Courses/Courses'
import Signup from './components/Signup'
import Contact from './contact/contact_page'
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'

// import './App.css'

function App() {

  const[authUser, setAuthUser] = useAuth();
    console.log(authUser);

  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home />
      <Course /> */}
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser?<Courses />:<Navigate to={"/signup"} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App
