import React from 'react'
import bg from "../assets/images/bg-picture.jpg"
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div>
      <div className='w-full h-screen fixed top-0'>
          <div className='w-full bg-cover bg-center h-full flex text-white'
          style={{backgroundImage:`url(${bg})`}}
          >
                 <div className='bg-black bg-opacity-80 overflow-y-scroll scrollbar-hidden'>
                 <div className='lg:px-20 px-10 py-10 flex flex-col  justify-center gap-5'>
                    <h1 className='lg:text-5xl text-3xl font-bold border-b-4 pb-5' >Design and Buy <sup className='text-2xl' >TM</sup> Fence</h1>
                        <p className='lg:text-2xl text-lg font-bold' >DEFINE YOUR FENCE WITH STYLE, PRIVACY, OR SECURITY</p>
                        <ul className='lg:text-xl text-sm font-medium lg:ps-5 flex flex-col gap-3 '>
                            <li className='flex flex-row gap-4' >
                                <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                                </h1> Multiple Materials</li>
                            <li className='flex flex-row gap-4' >
                                <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                                </h1> Custom Drawn Layout</li>
                            <li className='flex flex-row gap-4' >
                                <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                                </h1> Add Gates & Openings</li>
                            <li className='flex flex-row gap-4' >
                                <h1><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>
                                </h1> Draw With Google Maps</li>
                        </ul>
                        <div className='flex lg:flex-row flex-col lg:items-center items-start justify-center lg:gap-3 gap-5 ' >
                            <Link className='text-center w-28 transition duration-100 hover:-translate-y-1 lg:w-44 lg:p-4 p-2 lg:text-lg text-md h-full bg-green-800 rounded-full '
                            to={'/stores'}
                            >start design</Link>
                            <Link to={'/savedesign'} className='text-center w-28 transition duration-100 hover:-translate-y-1 lg:w-44 lg:p-4 p-2 lg:text-lg text-md h-full bg-green-800 rounded-full '>saved design</Link>
                        </div>
                        <ul className='lg:text-xl text-sm font-medium lg:ps-5 flex flex-col gap-3'>
                            <li className='flex flex-row gap-4' ><h1><i className="text-green-800 fa-solid fa-money-bills "></i></h1>Free Estimates</li>
                            <li className='flex flex-row gap-4' ><h1><i className="text-green-800 fa-solid fa-maximize "></i></h1>Customizable Design Features</li>
                            <li className='flex flex-row gap-4' ><h1><i className="text-green-800 fa-solid fa-sd-card "></i></h1>Save And Recall Designs</li>
                            <li className='flex flex-row gap-4' ><h1><i className="text-green-800 fa-solid fa-message "></i></h1>Chat With Experts</li>
                            <li className='flex flex-row gap-4' ><h1><i className="text-green-800 fa-solid fa-paper-plane"></i></h1>Email Your Design</li>
                            <li className='flex flex-row gap-4' ><h1><i className="text-green-800 fa-solid fa-cart-shopping"></i></h1>Order Online Or In-Store</li>
                        </ul>
                    </div>
                 </div>
                 <div className='w-full h-screen lg:flex hidden '> 
                 </div>
          </div>
      </div>
    </div>
  )
}

export default HomeScreen
