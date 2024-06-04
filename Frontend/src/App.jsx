import React from 'react'
import './App.css'
import Navbar from './Components/Navbars/Navbar'
import { Routes,Route } from 'react-router-dom'
import Hero from './HomePg/Hero'
import Wishlist from './Pages/Wishlist'
import About from './HomePg/About'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/wishlist' element={<Wishlist/>}/> 
       
      </Routes>
    </div>
  )
}

export default App
