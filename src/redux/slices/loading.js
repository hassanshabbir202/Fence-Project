import { createSlice } from "@reduxjs/toolkit";

export const LoadingSlice = createSlice({
  name: "LoadingSlice",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading:(state,action) => {
        state.isLoading = action.payload;
    }
  },
});

export const {setIsLoading} = LoadingSlice.actions;

export default LoadingSlice.reducer;