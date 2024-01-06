import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import {useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { setCartData } from '../redux/slices/CartData'
import WarningModal from '../components/WarningModal'

const Purchase_Screen = ({isLoggedIn}) => {

    const DesignId = useSelector((state)=> state.selectedDesign.DesignId );
    const TotalPrice = useSelector((state)=> state.selectedMaterials.PriceTotal );
    const Types_M = useSelector((state) => state.selectedMaterials.Type_M);
    const Fence_M = useSelector((state) => state.selectedMaterials.Fence_M);
    const Gate_M = useSelector((state) => state.selectedMaterials.Gate_M);
    const Option_M = useSelector((state) => state.selectedMaterials.Option_M_t1);
    const totalPrice = useSelector((state)=>state.selectedMaterials.PriceTotal)
    const Main_in_Rebate = 120  

    const [showModal,setShowModal] = useState(false);
    const [modalContent,setmodalContent] = useState("");
    const [modalHeading,setmodalHeading] = useState("");
    

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const AddtoCartHandler = () => {

      const AddtoCartData =  {

            designId : DesignId,
            designName :"Fence Design",
            designImg : Types_M.img,
            totalPrice : (totalPrice - Main_in_Rebate),

        }


        if(isLoggedIn){

            dispatch(setCartData(AddtoCartData))
            navigate("/Cart")
        
        }else{

            setShowModal(true);
            setmodalHeading("Sign in")
            setmodalContent("to Add products in your cart you need to sign in")
        
        }


    }


  return (
    <div>
       <div className='flex flex-col' >     
    
            <div>
                <Navbar/>
            </div>
            <hr />
            <div className='w-full h-full lg:mt-20 mt-24 flex justify-center items-center flex-col '>
                    <ul className='lg:w-4/12 w-full h-auto gap-2 flex flex-col justify-center items-center text-xl font-semibold p-5' >
                        <li className='w-full flex justify-between' >
                            <h1>Design ID #:</h1> <span>{DesignId}</span>
                        </li>
                        <li className='w-full flex justify-between' >
                            <h1>Estimated Price:</h1>		<span>{TotalPrice}</span>
                        </li>
                        <li className='w-full flex justify-between text-red-500 ' >
                             <h1>Mail-In Rebate:</h1> 		 <span>{Main_in_Rebate}</span>
                        </li>
                        <hr className='border-2 w-full'  />
                        <li className='w-full flex justify-between text-red-500' >
                              <h1>Final Price:</h1>		     <span>{TotalPrice - Main_in_Rebate}</span>
                        </li>
                        <li className='text-xs' >*Today's estimated price, future pricing may go up or down. Tax, labor, and delivery not included.</li>
                        <li><button onClick={AddtoCartHandler} className=' rounded-full h-auto w-auto p-4 bg-green-500 text-white text-base' >Add to Cart</button></li>
                    
                        <li>
                            <div className='text-xs' >
                                *Selecting this option will place your material selections in the Menards.com shopping cart. 
                                After completing your purchase, store invoices and special order contracts, if required, will
                                be generated. Print out all items for your reference. You will receive emails on the status
                                of any special orders as they ship and arrive at the store. Professional delivery is available
                                and can be arranged by the Delivery Coordinator at your local Menards store or through Menards.com
                                shopping cart. Delivery is extra and is calculated based on the order size.
                            </div>
                        </li>
                    
                    </ul>
            </div>
            
        </div>
        <WarningModal isOpen={showModal} setIsOpen={setShowModal} content={modalContent} heading={modalHeading} isCart={true} navigate={"/login"} />
    </div>
  )
}

export default Purchase_Screen
