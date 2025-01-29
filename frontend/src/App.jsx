import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Components/productselectionform.jsx'
import Navbar from './Components/navbar.jsx'
import LoginForm from './Components/loginform.jsx'
import SignupForm from './Components/signupform.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)


  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignupForm />} />
    </Routes>
          
  )
}

export default App
