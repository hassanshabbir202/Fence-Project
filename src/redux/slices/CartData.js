import { createSlice } from '@reduxjs/toolkit';

export const CartData = createSlice({
  name: 'CartData',
  
  initialState:{
        cart:[]
    },

  reducers: {

    setCartData:(state,action)=>{
        state.cart.push(action.payload)
    }
},

});

export const { setCartData } = CartData.actions;

export default CartData.reducer;
