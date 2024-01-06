import React from 'react'
import Navbar from '../components/Navbar';
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

const CartScreen = () => {

   const cart = useSelector((state) => state.CartData.cart)
   const TotalPrice = useSelector((state)=> state.selectedMaterials.PriceTotal );
 
   const nevigate = useNavigate()

    return(
        <div className='' >
            <div>
                <Navbar/>
            </div>
        <div className='flex items-center h-screen lg:fixed w-full bg-slate-200 p-2' >
            <div className='h-auto w-full flex gap-2 lg:flex-row flex-col' >
                <div className='h-full w-full lg:mt-0 mt-20 flex flex-col gap-2 p-6 bg-slate-300' >
                    <div className='w-full h-full bg-white flex flex-col gap-2 border p-4' >
                        <h1 className='font-semibold text-xl' >Your Shopping Cart</h1>
                        <p className='text-sm' >Please verify and/or choose the delivery destination and shipping for each product before proceeding through the checkout.</p>
                    </div>
                    <div className='w-full h-full flex flex-col gap-2' >
                        <ul className='w-full h-full flex font-semibold  justify-between p-4  bg-white' >
                            <li>Prodeuct</li>
                            <li>How to Get It</li>
                            <li>Qty</li>
                            <li>Total Price</li>
                        </ul>
                        {cart?.length > 0 ? (
                        
                        cart.map((CurEl,index)=>{
                            let QtyTotal = CurEl.totalPrice
                            return(                        
                                <ul key={index} className='w-full h-full flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center  font-semibold lg:justify-between p-4  bg-white' >
                                    <li className='flex' >
                                        <span className='border h-20 w-20 bg-center bg-cover' ><img src={CurEl.designImg} alt="design img" /></span>
                                        <div className='flex flex-col p-2 font-normal text-sm'>
                                            <span>{CurEl.designName}</span>
                                            <span className='' ><span>Design ID :</span><span>{CurEl.designId}</span></span>
                                        </div>
                                    </li>
                                    <li className='flex flex-col gap-2 font-normal text-sm p-2' >
    
                                        <div className="firstRadio">
                                            <input
                                            type="radio"
                                            id="pickupRadio"
                                            name="deliveryOption"
                                            value="pickup"
                                            />
                                            <label className='p-2' htmlFor="pickupRadio">Pick Up At Store</label>
                                        </div>
    
                                        <div className="secondRadio">
                                            <input
                                                type="radio"
                                                id="localDeliveryRadio"
                                                name="deliveryOption"
                                                value="localDelivery"
                                            />
                                            <label className='p-2' htmlFor="localDeliveryRadio">Local Store Delivery</label>
                                        </div>
                                    
                                    </li>
                                    <li>
                                        <input type="number" value={1} disabled={true} className='border border-gray-700 text-center w-20 rounded-full' name="" id="" />
                                    </li>
                                    <li className='h-full items-center flex' >
                                        ${QtyTotal}
                                    </li>
                                </ul>)
                                })
                        ):(
                        <div className='w-full p-2 bg-white text-center' > Your Cart is Empty ! </div>)
                        }
                    </div>
                </div>
                <div className='lg:w-5/12 h-full p-3 w-full bg-slate-300' >
                    <div className='w-full h-full bg-white font-semibold text-lg flex flex-col p-4' >
                        <h1>Order Summary</h1>
                    </div>
                    <div className='w-full h-full bg-white flex flex-col p-4' >
                        <ul>
                            <li className='flex justify-between' >
                                <span className='font-semibold' >Merchandies Subtotal</span><span>${TotalPrice}</span>
                            </li>
                            <li className='flex justify-between' >
                                <span className='font-semibold' >Pretax Subtotal</span><span>${TotalPrice}</span>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full h-full bg-white flex flex-col p-4' >
                        <p className='text-sm text-green-700' >
                            By purchasing today you save $89.31 with mail-in rebates! 
                        </p>
                        <div className='mt-2' >
                            <button onClick={(e)=>{
                                e.preventDefault();
                                nevigate("/checkoutdetails");
                            }} className="w-full h-12 rounded-full text-white font-semibold shadow-sm" style={{background:"#15803d"}}>CHECKOUT NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default CartScreen
