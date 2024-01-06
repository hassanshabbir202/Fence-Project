// FenceDesignSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainInRebate: 120,
  storeName:"",
  storeAdress:"",
  storeDistance:"",
  storePhone:"",
  Zip_code:""
};

export const selectedStore = createSlice({
  name: 'selectedStore',
  initialState,
  reducers: {
    mailRebat: (state) => {
      state.mainInRebate
    },
    getStoreName : (state , action) => {
        state.storeName = action.payload;
    },
    getStoreDistance : (state , action) => {
      state.storeDistance = action.payload;
    },
    getStoreAdress : (state , action) => {
      state.storeAdress = action.payload;
    },
    getStorePhone : (state , action) => {
      state.storePhone = action.payload;
    },
    getZip_code : (state , action) => {
      state.Zip_code = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {  mailRebat , getStoreName , getStoreDistance , getStoreAdress, getZip_code , getStorePhone} = selectedStore.actions;

export default selectedStore.reducer;
