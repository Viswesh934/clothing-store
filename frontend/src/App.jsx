import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Components/productselectionform.jsx'
import Navbar from './Components/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
    <Navbar/>
    <Product/>   
    </div>        
  )
}

export default App
