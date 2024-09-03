import React from 'react'
import { arts } from "../assets"

const Arts = () => {
    return (
        <div className='w-full py-10' id='arts'>
            <h1 className='font-bold text-5xl font-montserrat text-center my-16'>My Work</h1>

            <div className='flex flex-wrap justify-center items-center gap-4 p-4'>
                {arts.map((art, index) => (
                    <div key={index} className=' min-w-[200px] max-w-[500px] p-2'>
                        <div className='h-64'>
                            <img src={art} className='w-full h-full object-cover rounded-sm' alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Arts
