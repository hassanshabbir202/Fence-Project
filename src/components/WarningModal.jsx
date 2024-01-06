import React from 'react'
import {useNavigate} from 'react-router-dom'

const WarningModal = ({isOpen, heading, content,setIsOpen, navigate,isCart, isLogout}) => {

  const _nevigate = useNavigate()

  return (
    <>
    <div className={`fixed inset-0 overflow-y-auto ${isOpen ? 'visible opacity-100' : 'invisible opacity-0' } z-50`} >
      <div className="flex items-start mt-14 justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className={`relative z-10 transition-transform  duration-700 lg:mx-0 mx-5  transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} flex flex-col gap-4 bg-white w-full max-w-md mx-auto rounded-lg shadow-md`}>
          
          <div className='w-full h-16 bg-green-500 rounded-md rounded-b-none items-center flex justify-between px-4 p-2' >
                <h1 className='text-white font-bold text-lg' >{heading}</h1>
                <button onClick={()=>{setIsOpen(false)}} className='text-3xl text-white cursor-pointer' ><i className="fa-regular fa-circle-xmark"></i></button>
          </div>
          <div className='w-full h-auto items-center flex justify-center' >
                <h1 className='text-center text-base'>{content}</h1>
          </div>

          {isCart || isLogout ? (
            <div className='w-full flex justify-evenly items-center p-2 ' >
              <button onClick={(e)=>{
                e.preventDefault();
                setIsOpen(false)
                }} className='bg-green-500 rounded-full px-8 py-3 text-white font-bold' >cancel</button>
                
                <button onClick={(e)=>{
                e.preventDefault();
                navigate?_nevigate(navigate):""
                localStorage.removeItem("loggedIn")
                localStorage.removeItem("token")
                setIsOpen(false)
                }} className='bg-green-500 rounded-full px-8 py-3 text-white font-bold' >
                {isCart? "sign In" : "Sign Out"}  
                </button>
            </div>
          )
          :(<div className='w-full flex justify-center items-center p-2 ' >
                <button onClick={(e)=>{
                  e.preventDefault();
                  navigate?_nevigate(navigate):""
                  setIsOpen(false)
                  }} className='bg-green-500 rounded-full px-8 py-3 text-white font-bold' >OK</button>
          </div>)}
       
        </div>
      </div>
    </div>
    </>
  )
}

export default WarningModal
