import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const DrawingOptions = () => {
  return (
    <div>
    <div className='flex flex-col' >
        <div>
          <Navbar/>
        </div>
        <div className='lg:h-full lg:fixed h-full w-full lg:pt-0 pt-14 mt-10' >
          <div className=''>
          <div className='h-full lg:p-24 lg:gap-8 gap-16 w-full text-gray-700 flex flex-col justify-center items-center '>
        <div className='text-3xl mt-8 mx-4'>
            How would you like to estimate your fence?
        </div>
        <div className='flex w-full lg:flex-row flex-col  lg:gap-0  gap-5 text-green-800' >
            <div className='w-full flex-col gap-20 lg:border-r  flex items-center justify-center' >
                <h1>Find fence dimensions with Google Maps</h1>
                <div className='text-7xl'>
                    <i className="fa-solid fa-map-location-dot fa-2xl"></i>
                </div>
                <Link
                to={'/map'}
                className='text-center text-white flex items-center justify-center transition duration-100 hover:-translate-y-1 lg:w-44 w-32 lg:p-4 p-2 lg:text-lg text-md lg:h-12 h-15   bg-green-800 rounded-full ' >Google Map</Link>
            </div>
            <div className='w-full flex-col gap-20 flex items-center justify-center' >
                <h1>Manually enter my fence dimensions</h1>
                <div className='text-7xl'>
                <i className="fa-solid fa-compass-drafting fa-2xl"></i>
                </div>
                <Link className='text-center text-white flex items-center justify-center w-32 transition duration-100 hover:-translate-y-1 lg:w-44 lg:p-4 p-2 lg:text-lg text-md lg:h-12 h-15 bg-green-800 rounded-full ' 
                 to={'/canvas'}
                >Draw Canvas</Link>
            </div>
        </div>
    </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default DrawingOptions
