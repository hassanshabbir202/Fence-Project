import React, { useState } from 'react'
import {useSelector} from "react-redux"
import { payment } from '../API_Calls/API_Calls_';
import { useNavigate } from 'react-router-dom';

const OrderConfirmationScreen = () => {

    const customer_name = useSelector((state)=> state.BillingDetails.customerDetails.Customer_Name);
    const customer_Buiessness = useSelector((state)=> state.BillingDetails.customerDetails.Customer_Buiessness)
    const customer_Address = useSelector((state)=> state.BillingDetails.customerDetails.Customer_Address)
    const customer_PostalCode = useSelector((state)=> state.BillingDetails.customerDetails.Customer_PostalCode)
    const customer_City = useSelector((state)=> state.BillingDetails.customerDetails.Customer_City)
    const customer_Country = useSelector((state)=> state.BillingDetails.customerDetails.Customer_Country)
    const country = useSelector((state)=> state.BillingDetails.customerDetails.Customer_State)
    const customer_State = useSelector((state)=> state.BillingDetails.customerDetails.Customer_Name)
    const customer_Phone = useSelector((state)=> state.BillingDetails.customerDetails.Customer_PhoneNumber)

    const count = 1
    const Totalprice = useSelector((state) => state.selectedMaterials.PriceTotal);
    const name = "Fence";
    const [disabled,setisDisabled] = useState(false);

    const navigate = useNavigate();

    const navigateToBack = () => {
      navigate("/");
    }

    const goToStripe = async () => {
      
      try {
        setisDisabled(true);
        
        const res = await fetch("https://comfortable-tan-wig.cyclic.app/payment/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              {
                quantity: count,
                price: Totalprice,
                name: name,
              },
            ],
          }),
        });
    
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
    
        // Assuming the server response is a URL
        const data = await res.json();
        window.location = data.url;
      } catch (err) {
        console.error("Error during fetch:", err);
        setisDisabled(false)
      }
    };


  return (
    <>
    <div className="w-full h-16 bg-cover bg-center">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.N3-_hRk0071NKuApnZH4oAHaBl&pid=Api&P=0&h=220"
          alt=""
        />
    </div>
    <div className="flex items-center justify-center p-5" >
        <div className="border h-full w-full bg-slate-100" >
          <div className="w-full h-14 bg-green-500">
            <h1 className="w-full text-2xl  text-white h-full flex items-center justify-center" >order confirmation</h1>
          </div>
        <div className="h-full w-full p-5 flex flex-col md:flex-row gap-4">
          <div className="border rounded-md bg-white h-full p-5 w-full" >
            <div className="w-full h-10 bg-blue-500 rounded-md text-sm flex items-center justify-center text-white" >
                Billing and card information
            </div>
            <div className="w-full p-3 text-lg font-bold" >
              Billing Information
            </div>
            <ul className='w-full flex flex-col' >
              <li className='w-full flex gap-10' ><span>Name</span> : <span>{customer_name}</span></li>
              <li className='w-full flex gap-10' ><span>Buiesness</span> : <span>{customer_Buiessness}</span></li>
              <li className='w-full flex gap-10' ><span>Address</span> : <span>{customer_Address}</span></li>
              <li className='w-full flex gap-10' ><span>Zip Code</span> : <span>{customer_PostalCode}</span></li>
              <li className='w-full flex gap-10' ><span>City</span> : <span>{customer_City}</span></li>
              <li className='w-full flex gap-10' ><span>Country</span> : <span>{customer_Country}</span></li>
              <li className='w-full flex gap-10' ><span>State</span> : <span>{customer_State}</span></li>
              <li className='w-full flex gap-10' ><span>Phone</span> : <span>{customer_Phone}</span></li>
            </ul>
          </div>
          <div className="border rounded-md bg-white h-full p-5 w-full" >
          <div className="w-full p-3 text-lg font-bold" >
              Order Summary
            </div>
            <ul>
              <li>Name : {customer_name}</li>
              <li>Buiesness : {customer_Buiessness}</li>
              <li>Address : {customer_Address}</li>
            </ul>
            <h2 className="font-bold mt-5" >by purchasing today save $124.00 with mail in rebates!</h2>
            <div className="flex justify-center items-center gap-4 w-full h-12 mt-10" >
                  <button className="w-full bg-gray-100 h-full rounded-full" onClick={navigateToBack} >Back</button>
                  <button disabled={disabled} onClick={goToStripe} className="w-full bg-blue-500 text-white h-full rounded-full" >Continue</button>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default OrderConfirmationScreen
