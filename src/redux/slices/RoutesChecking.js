// FenceDesignSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
    isStores : true,
    isDraw : false,
    isMaterials : false,
    isSummary : false,
    isPurchase : false,

};

export const selectedDesign = createSlice({
  name: 'selectedDesign',
  initialState,
  reducers: {
    
    setIsStore : (state,action) => {
        state.isStores = action.payload
    },
    setIsDraw : (state,action) => {
        state.isDraw = action.payload
    },
    setIsMaterials : (state,action) => {
        state.isMaterials = action.payload
    },
    setIsSummary : (state,action) => {
        state.isSummary = action.payload
    },
    setIsPurchase : (state,action) => {
        state.isPurchase = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {setIsStore, setIsDraw, setIsMaterials, setIsSummary, setIsPurchase} = selectedDesign.actions;

export default selectedDesign.reducer;
