import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import boom from '../../assets/images/boom.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [isActive, setActive]= useState('')
  const navi = useNavigate()
  return (
    <div className=' sticky top-0 z-10 bg-black text-white'>
      <nav className=' h-16 flex items-center shadow-md'>
       <div className="container flex justify-between mx-5">
       <div className="logo">
            <img src={logo} alt=""  className='h-12'/>
        </div>
        <div className="navitems">
            <ul className='flex gap-3 items-center'>
               
                <li className={isActive === 'home'?'active':''} onClick={()=> setActive('home')}><Link to={'/'}> Home </Link></li>
                <li className={isActive === 'about'?'active':''} onClick={()=> setActive('about')}><Link to={'/about'}> About </Link></li>
                <li className={isActive === 'job'?'active':''} onClick={()=> {
                  setActive('job') 
                  navi('/')
              }}><a href='#job'>Job</a> </li>
                <li className={isActive === 'wishlist'?'active':''} onClick={()=> setActive('wishlist')}><Link to={'/wishlist'}> <img src={boom} alt="" className='w-8'/> </Link></li>
            </ul>
           
        </div>
        <div className="lang ">
                <img src="https://w7.pngwing.com/pngs/698/799/png-transparent-translation-japanese-language-interpretation-mandarin-chinese-language-angle-english-text.png" className="h-10 rounded-lg shadow-md" alt="" />
            </div>
        
       </div>
      </nav>
    </div>
  )
}

export default Navbar
