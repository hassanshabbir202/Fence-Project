import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { deleteDesign, getDesign } from '../API_Calls/API_Calls_';
import {useDispatch, useSelector} from "react-redux";
import  {useNavigate} from "react-router-dom";
import WarningModal from '../components/WarningModal';
import { captureDesignFrom_DB, setDesignId } from '../redux/slices/selectedDesign';


const SavedDesignScreen = () => {

    const [firstModalVal , setFirstModalVal] = useState('');
    const [secondModalVal , setSecondModalVal] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [DataBase_Design , setDataBase_Design] = useState([]);
    let DataBase_Design_randomId = useSelector((state)=>state.selectedDesign.DesignId);
    const [DataBase_Design_pstTime , setDataBase_Design_pstTime] = useState("");
    const [recall_Id, setRecall_Id] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
  
    const getDesignfromDB = (id) => {
        
  
      if (recall_Id.length === 12){
  
            getDesign(id).then((resp)=>{
              
  
              if(resp.status === 200){
  
                setDataBase_Design(resp.data.lines)
                dispatch(setDesignId(resp.data.randomId))
                setDataBase_Design_pstTime(resp.data.pstTime)
  
              }
  
  
            }).catch((err)=>{
  
                setShowModal(true);
                setFirstModalVal("Missing Design")
                setSecondModalVal(` Design from this ${id} Not Found`)
  
              })
  
      }else{
  
        setFirstModalVal("Recall Design");
        setSecondModalVal("Invalid Design ID. Please enter a valid 12-character Design ID.")
        setShowModal(true);
      }
  
  
    }
  
    const deleteDesignfromDB = (id) => {
        
  
            deleteDesign(id).then((resp)=>{

              if(resp.data === "Data deleted successfully"){
  

                  setShowModal(true);
                  setFirstModalVal("Design Deletion Sucess");
                  setSecondModalVal(`Design from this ${DataBase_Design_randomId} Id is Permanently Deleted !`);
                  DataBase_Design_randomId = ""
                  setDataBase_Design_pstTime("");
                  
              }
  
  
            }).catch((err)=>{
  
              setShowModal(true);
              setFirstModalVal("Design Deletion Failuer");
              setSecondModalVal(`Design from this ${DataBase_Design_randomId} Id is do not Deleted !`);
            
              })
  
    
        
    }

const EditDesign = () => {


      dispatch(captureDesignFrom_DB(DataBase_Design))
      navigate("/canvas")
  
}

  return (
    <div>
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="mt-12">
        
      <div className="w-full lg:h-14 h-32 border bg-gray-200 flex items-center justify-start" >
        <div className="w-full flex items-center justify-start gap-4 p-4 lg:flex-row flex-col" >
            <p className="text-base" >Login to retrieve your designs, or search by Design ID : <span className="border-2 border-green-500 rounded-full text-white font-bold bg-green-500 px-2 text-sm" >?</span> </p>
            <div className="flex gap-4" >
                <input onChange={(e)=>{
                    e.preventDefault();
                    setRecall_Id(e.target.value)
                }} className="border-2 border-green-500 rounded-full p-2  text-center" placeholder="Enter Recall id" type="number" name="recall_Id" />
                <button onClick={(e)=>{
                  e.preventDefault();
                  getDesignfromDB(recall_Id);
                }}  className="bg-green-500 text-white p-2 border-2 rounded-full font-semibold" >recall</button>
            </div>
        </div>
      </div>


            {/* Display the recalled drawings if available */}

            {/* (DataBase_Design_pstTime && DataBase_Design_randomId) */}


        {(DataBase_Design_pstTime && DataBase_Design_randomId) && (

              <div className="w-full h-full">

                <div className="hidden  lg:flex flex-col " >

                <div className="w-full h-12 bg-slate-100" >
                        <ul className="w-full h-full flex" >
                            <li className="w-full h-full border items-center justify-center flex font-semibold " >Design Name</li>
                            <li className="w-full h-full border items-center justify-center flex font-semibold " >Design Date</li>
                            <li className="w-full h-full border items-center justify-center flex font-semibold " >Design ID</li>
                            <li className=" lg:flex hidden w-full h-full border items-center justify-center px-10" ></li>
                        </ul>
                </div>

                <table className="w-full h-auto  ">
                  <tbody>
                          <tr
                            className="w-full p-3 border flex items-center justify-evenly"
                          >
                            <td className="w-full h-full text-center">
                              {"Fence Design"}
                            </td>
                            <td className="w-full h-full text-center">
                              {DataBase_Design_pstTime}
                            </td>
                            <td className="w-full h-full text-center">
                              {DataBase_Design_randomId}
                            </td>
                            <td className="w-full h-full text-center">
                                <ul className="flex gap-2">
                                  <li>
                                      <button
                                        className=" cursor-pointer h-10 w-36 flex items-center justify-center bg-blue-600 shadow-sm hover:shadow-md rounded-full text-white lg:text-md"
                                        onClick={(e)=>{
                                          e.preventDefault();
                                          EditDesign();
                                        }}
                                        >
                                        Edit Design
                                      </button>
                                  </li>
                                  <li>
                                  <button
                                        className=" cursor-pointer h-10 w-36 flex items-center justify-center bg-red-600 shadow-sm hover:shadow-md rounded-full text-white lg:text-md"
                                        onClick={(e)=>{
                                          e.preventDefault();
                                          deleteDesignfromDB(DataBase_Design_randomId)
                                        }}
                                        >
                                        Delete Design
                                      </button>
                                  </li>
                                </ul>
                            </td>
                          </tr>
                  </tbody>
                </table>

                </div>

        
                {/* Mobile Screen */}
        
                <div className="h-auto lg:hidden p-2 w-full flex flex-col">
        
                        <div className="w-full border p-3">
                          <table className="flex flex-col gap-2 w-full">
                            <tbody>
                              <tr className="flex items-start">
                                <th>Design Name:</th>
                                <td className="text-sm font-normal text-start pl-3">
                                  {"Fence Design"}
                                </td>
                              </tr>
                              <tr className="flex items-start">
                                <th>Design ID:</th>
                                <td className="text-sm font-normal text-start pl-3 ">
                                  {DataBase_Design_randomId}
                                </td>
                              </tr>
                              <tr className="flex items-start">
                                <th>Design Date:</th>
                                <td className="text-sm font-normal text-start pl-3 ">
                                  {DataBase_Design_pstTime}
                                </td>
                              </tr>
                              <tr className="flex items-star  items-center justify-end w-full">
                                <td>
                                      <ul className="flex flex-col gap-2">
                                        <li>
                                            <button
                                              className="p-2 flex w-44 items-center justify-center bg-blue-600 shadow-sm hover:shadow-md rounded-full text-white text-xs lg:text-md"
                                              >
                                                  Edit Design
                                            </button>
                                        </li>
                                        <li>
                                        <button
                                              className=" p-2 flex w-44 items-center justify-center bg-red-600 shadow-sm hover:shadow-md rounded-full text-white text-xs lg:text-md"
                                              onClick={(e)=>{
                                                  e.preventDefault()
                                                  deleteDesignfromDB(DataBase_Design_randomId)
                                              }}
                                              >
                                                  delete Design
                                            </button>
                                        </li>
                                      </ul>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                     
                </div>
              
              </div>
        )}
        

      </div>
    </div>

    <WarningModal isOpen={showModal} setIsOpen={setShowModal} heading={firstModalVal} content={secondModalVal} />

    </div>
  )
}

export default SavedDesignScreen
