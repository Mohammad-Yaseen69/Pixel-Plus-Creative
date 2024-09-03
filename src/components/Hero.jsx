import React from 'react'
import HeroImg from "../assets/6856004.jpg"

const Hero = () => {
  return (
    <div className='w-full relative h-screen'>
      <div className='absolute top-0 left-0 w-full h-screen'>
        <img src={HeroImg} alt="heroImg" className='w-full h-full object-cover' />
      </div>
      <div className='absolute top-0 left-0 w-full h-screen bg-black/70'></div>
      <div className='absolute top-0 left-0 w-full h-screen flex flex-col justify-center text-white p-4'>
        <div className='flex gap-3 px-0 sm:px-6 lg:px-40 '>
          <div className='w-1 h-full rounded-3xl bg-white'></div>
          <div className='flex flex-col gap-5 items-start'>
            <div>
              <h1 className='font-extrabold font-openSans text-blue-400 text-5xl xs:text-6xl sm:text-7xl md:text-8xl'>Pixel Plus</h1>
              <h1 className='font-extrabold font-openSans text-white text-5xl xs:text-6xl sm:text-7xl md:text-8xl'>Creative</h1>
            </div>
            <p className='font-bold text-gray-100 font-montserrat text-sm xs:text-lg sm:text-xl w-full'>Pixel-Perfect Designs, Unmatched User Experiences</p>
           <a href="#services"><button className='button'>My Services</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero