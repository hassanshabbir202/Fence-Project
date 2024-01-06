import { Link } from 'react-router-dom'
// import GooglePlaceSearch from '../GooglePlaceSearchBar/GooglePlaceSearch'

const DrawSide = () => {

  return (
   <>
   
   <div className='w-full h-full border py-10 px-5 flex flex-col gap-9 items-center justify-center' >
            <div className='text-green-700' >
                <h1 className='border-b-2 border-green-700 w-auto mb-10'>Select design method ?</h1>
                <div className='flex gap-4 p-2' >
                    <Link to={"/map"}>
                        <div className='hover:border-green-600 shadow-md hover:shadow-sm h-44 w-32 p-5 border rounded-xl flex flex-col justify-center items-center gap-4' >
                            <h1 className='text-3xl' ><i className="fa-solid fa-map-location-dot fa-2xl"></i></h1>
                            <p className='text-sm' >Measure with <br /> Google Map</p>
                        </div>
                    </Link>
                    <Link to={"/canvas"}>
                        <div className='hover:border-green-600 shadow-md hover:shadow-sm h-44 w-32 p-5 border rounded-xl flex flex-col justify-center items-center gap-4' >
                            <h1 className='text-3xl' ><i className="fa-solid fa-compass-drafting fa-2xl"></i></h1>
                            <p className='text-sm' >Measure <br /> manually</p>
                        </div>
                    </Link>
                </div>
            </div>
            {(false) ?<>
            {/* <GooglePlaceSearch/> */}
            <div className='w-full p-5 flex flex-col gap-4'>
                    <h1 className='text-xl font-bold' >Create your fence design</h1>
                    <ul className=' text-sm flex flex-col list-disc' >
                        <li>Click or tap again to place the end point of a fence side.</li>
                        <li>To remove a side, select the distance label on the corresponding side to show the remove option.</li>
                        <li>Once you’re done with your design, select the Continue button to select your fence material.</li>
                        <li>Openings and gates can be added later in the design process.</li>
                    </ul>
                </div> 
            </>:<div className='w-full p-5 flex flex-col gap-4' >
                    <h1 className='text-xl font-bold' >Create your fence design</h1>
                    <ul className=' text-sm flex flex-col list-disc' >
                        <li>Click or tap and drag along the grid to draw your fence, letting go when the side is finished.</li>
                        <li>For connected sides, start a new segment by dragging from the endpoint of an existing side.</li>
                    </ul>
                </div>
            }
            
    </div>
   </>
  )
}

export default DrawSide



