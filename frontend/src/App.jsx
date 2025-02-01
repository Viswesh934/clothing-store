import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Components/productselectionform.jsx'
import Navbar from './Components/navbar.jsx'
import LoginForm from './Components/loginform.jsx'
import SignupForm from './Components/signupform.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/homepage.jsx'
import Analysis from './Components/analysispage.jsx'
import Productlist from './Components/productslist.jsx'
import Profile from './Components/userprofile.jsx'
import Settings from './Components/settings.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<SignupForm />} />
      <Route path='/product-form' element={<Product />} />
      <Route path='/analysis' element={<Analysis />} />
      <Route path='/products' element={<Productlist />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/settings' element={<Settings/>}/>

    </Routes>
          
  )
}

export default App
