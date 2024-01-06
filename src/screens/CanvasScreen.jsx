import React from 'react'
import Navbar from '../components/Navbar'
import DrawSide from '../components/DrawSide'
import Canvas from '../components/Canvas'

const CanvasScreen = () => {
  return (
    <div>
      <div className='flex flex-col' >
              <div>
                <Navbar/>
              </div>
              <div className='h-full w-full mt-16'>
                  <div className='flex pt-10 lg:fixed'>
                    <div className='lg:w-6/12 w-full lg:flex flex-col hidden' >
                      <DrawSide/>
                    </div>
                    <div className='w-full pb-16 lg:mt-0 md:mt-0 mt-16' >                  
                      <Canvas/>
                    </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default CanvasScreen
