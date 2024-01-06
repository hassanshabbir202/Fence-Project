import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import MaterialsCard from '../../components/MaterialsCards'
import MaterialsTable from '../../components/MaterialsTable'
import jsonData from "../../assets/optionsData/optionsData.json"
import jsonData_2 from "../../assets/optionsData/optionPostFootingData.json"

const MaterialOption = () => {

  const [post,setPost] = useState(false);
  const [postFooting,setPostFooting] = useState(false);
  const [currentTable,setcurrentTable] = useState("optionpost");


  return (
    <div>
        <div className='flex flex-col' >     
            <div>
            <Navbar/>
            </div>
            <div className='w-full flex lg:mt-28 mt-40 lg:flex-row flex-col-reverse '>
                <div className='lg:w-6/12 w-full h-full px-2 mt-10'>
                <div className='h-8 text-green-600 flex w-full items-center justify-start ' >
                <p className=''>  Select a type and click continue ?</p>
                </div>
                <div>
                  <div className='lg:h-auto h-full overflow-scroll flex flex-col-reverse  gap-1' >

                            <div>
                                  <div className='w-full bg-slate-300 rounded-sm h-12 flex justify-between p-4 items-center text-green-700' ><span className='text-sm' >Post (4 x 4 x 8' #2 Ground Contact AC2® Timber)</span> <button onClick={(e)=>{
                                  e.preventDefault();
                                  if(post){
                                    setPost(false);
                                  }else{
                                    setPost(true);
                                    setcurrentTable("option/t1")
                                  }
                                }} ><i class={`fa-solid fa-chevron-${post ? "down" : "right" }`}></i></button> </div>
                                { post ? <div className='p-3 inline-block' ><MaterialsCard Data={jsonData} _Route={"option/t1"} /></div> : ""}
                            </div>

                              <div>
                                    <div className='w-full bg-slate-300 rounded-sm h-12 flex justify-between p-4 items-center text-green-700' ><span className='text-sm' >Post Footing (Concrete Mix - 60 lb)</span> <button onClick={(e)=>{
                                  e.preventDefault();
                                  if(postFooting){
                                    setPostFooting(false);
                                  }else{
                                    setPostFooting(true);
                                    setcurrentTable("option/t2")
                                  }
                                }} ><i class={`fa-solid fa-chevron-${postFooting ? "down" : "right" }`}></i></button> </div>
                                { postFooting ? <div className='p-3' ><MaterialsCard Data={jsonData_2} _Route={"option/t2"} /></div> : ""}
                              </div>

                        </div>
                    </div>  
                </div>
                <div className='w-full h-full  border lg:mt-0 mt-10 lg:p-10'>
                  <MaterialsTable _route={currentTable} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MaterialOption
