import React from 'react'
import Home from './Home'
import SingleCard from '../../Components/Cards/singleCard'



const Hero = () => {
  return (
    <div>
      <div className="mb-5 ">
      <Home/>
      </div>
      <hr className='mx-10 border-2 rounded-md'/>
      <SingleCard/>
   
    
     
    </div>
  )
}

export default Hero
