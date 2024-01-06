// FenceDesignSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    DesignId :     null,
    Design_length: 0,
    MapDesign :    [],
    DB_Design :    [],
    Design :       [],
};

export const selectedDesign = createSlice({
  name: 'selectedDesign',
  initialState,
  reducers: {
      captureDesignFromMap: (state,action) => {
        state.MapDesign.push(action.payload) 
      },
      captureDesignFrom_DB: (state,action) => {
        state.DB_Design = action.payload 
      },
      setFinalDesign: (state, action) => {
          state.Design = action.payload
        },
      setDesignLength :(state,action) => {
           state.Design_length += action.payload
      },
      setDesignId: (state,action) => {
        state.DesignId = action.payload 
      },
  },
});

// Action creators are generated for each case reducer function
export const {setDesignId, setDesignLength, setFinalDesign, captureDesignFromMap, captureDesignFrom_DB} = selectedDesign.actions;

export default selectedDesign.reducer;
