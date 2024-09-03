import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto flex flex-wrap justify-between items-center'>
        {/* Company Name */}
        <div className='w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0'>
          <h2 className='text-2xl font-bold'>Pixel Plus Creative</h2>
        </div>

        {/* Copyright Information */}
        <div className='w-full md:w-1/3 text-center md:text-right'>
          <p className='text-sm'>&copy; {new Date().getFullYear()} Pixel Plus Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
