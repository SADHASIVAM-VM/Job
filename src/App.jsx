import React from 'react'
import './App.css'
import Navbar from './Frontend/Components/Navbars/Navbar'
import { Routes,Route } from 'react-router-dom'
import Hero from './Frontend/HomePg/Hero'
import Wishlist from './Frontend/Pages/Wishlist'
import About from './Frontend/HomePg/About'
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
