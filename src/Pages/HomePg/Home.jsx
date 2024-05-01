import React from 'react'
import bg from '../../assets/images/bg1.png'
import './Home.css'


const Home = () => {

  return (
    <div className="bg">
      <div className='mx-5 md:mx-10 my-5'>
      <div className="container flex flex-col md:flex-row items-center ">
        <div className="md:w-1/2 order-2 ">
           <h1 className='text-2xl  md:text-4xl xl:text-6xl font-bold textbg'>Find & Apply For <br />
           Your Dream Job in Japan
           </h1>
           <p className='mt-2 text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, necessitatibus.</p>
           
        </div>
        <div className="md:w-1/2 md:order-2 flex justify-center mb-10 ">
            <img src={bg} alt=""  className='w-[500px] md:w-[600px]'/>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Home
