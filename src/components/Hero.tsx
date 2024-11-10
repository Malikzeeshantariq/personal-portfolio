import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/IMG-20201114-WA0024.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "20%" }}
    >
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="zoom-in-up">Hi</p>
            <p data-aos="zoom-in-up">I,M</p>
            <p data-aos="zoom-in-up">Zeeshan</p>
            <p data-aos="zoom-in-up">Tariq</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
