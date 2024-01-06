import { createSlice } from '@reduxjs/toolkit';

export const BillingDetails = createSlice({
  name: 'BillingDetails',
  
  initialState:{
        customerDetails:{
            Customer_Name : "",
            Customer_Buiessness : "",
            Customer_Address : "",
            Customer_PostalCode : "",
            Customer_City : "",
            Customer_Country : "",
            Customer_State : "",
            Customer_PhoneNumber : "",
        }
    },

  reducers: {

    setBillingDetails:(state,action)=>{
        state.customerDetails.Customer_Name = action.payload.name
        state.customerDetails.Customer_Buiessness = action.payload.Buiessness
        state.customerDetails.Customer_Address = action.payload.Address
        state.customerDetails.Customer_PostalCode = action.payload.PostalCode
        state.customerDetails.Customer_City = action.payload.City
        state.customerDetails.Customer_Country = action.payload.country
        state.customerDetails.Customer_State = action.payload.state
        state.customerDetails.Customer_PhoneNumber = action.payload.Phone
    }
},

});

export const { setBillingDetails } = BillingDetails.actions;

export default BillingDetails.reducer;
