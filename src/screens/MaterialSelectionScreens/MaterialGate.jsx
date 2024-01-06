import React from 'react'
import Navbar from '../../components/Navbar';
import MaterialsCard from '../../components/MaterialsCards';
import jsonData from "../../assets/GateData/GateData.json"
import DisabledCanvas from '../../components/DisabledCanvas';

const MaterialGate = () => {
  
  
    return (
      <div className='flex flex-col' >     
          <div>
            <Navbar/>
          </div>
          <div className='w-full md:flex-row flex-col flex h-full mt-36 '>
              <div className='lg:w-6/12 w-full h-full flex flex-col  lg:mt-2 md:mt-2 mt-10'>
                  <div className='h-full overflow-scroll lg:mt-0 mt-10' >
                    <MaterialsCard Data={jsonData} _Route={"gate"} />
                  </div>
              </div>
              <div className='borde w-full h-full'>
                <DisabledCanvas/>
              </div>
          </div>
  
      </div>
    )

}

export default MaterialGate
