import React from 'react'
import Navbar from '../../components/Navbar'
import MaterialsCard from '../../components/MaterialsCards'
import jsonData from "../../assets/materialsData/materialsData.json"
import SelectedMaterial from '../../components/SelectedMaterial'

const MaterialType = () => {
  return (
    <div>
    <div className='flex flex-col'>     
        <div>
          <Navbar/>
        </div>
        <div className='flex lg:flex-row flex-col lg:mt-36 mt-48 '>
            <div className='lg:w-6/12 w-full h-full '>
              <div className='h-8 text-green-600 flex items-center justify-start p-5'>
                <p className=''>  Select a type and click continue ?</p>
              </div>
              <div className='lg:h-auto h-full overflow-scroll' >
                <MaterialsCard _Route={"type"} Data={jsonData} />
              </div>
            </div>
            <div className='border p-8 w-full h-full'>
              <SelectedMaterial/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MaterialType
