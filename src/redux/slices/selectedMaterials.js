import { createSlice } from '@reduxjs/toolkit';

export const selectedMaterials = createSlice({
  name: 'selection',
  initialState:{

    PriceTotal : 0,

    Type_M : {
      img:"https://designit.menards.com/media/Fence/selection/type/vinyl.jpg",
      txt:"Wood Picket",
      Details:{
          txt_1:"Wide variety and do-it-yourself installation allows for customization",
          txt_2:"Pickets available in Cedar, Pressure Treated, and Natural Wood",
          txt_3:"Installed heights range from 4' to 8'",
          txt_4:"Add your own stain or paint for the custom look you desire",
      },
      price:0
    },

    Fence_M :{
      txt: "4'x8' Cedar Dog Ear",
      img: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
      price: 0,
  },

    Option_M_t1 : {
        txt: "4'x8' Cedar Dog Ear",
        img: "https://designit.menards.com/media/Fence/selection/item/wood/1731374_4'%20x%208'%20Cedar%20Dog%20Ear%20Fence%20Panel.jpg",
        price: 0,
        type:"post"
      },

    option_M_t2 : {
      img : "https://designit.menards.com/media/Fence/selection/none.jpg",
      txt : "No Post Footing (Not Recommended)",
      price : 0
    },

    Gate_M:{
      price:0,
      width:0
    }

},
  reducers: {
    setType_M_Data :(state,action) => {
        
        state.Type_M = action.payload

    },
    setFence_M_Data :(state,action) => {
        state.Fence_M = action.payload
    },

    setOption_M_Data_t1 :(state,action) => {
      state.Option_M_t1 = action.payload
    },

    setOption_M_Data_t2 :(state,action) => {
      state.option_M_t2 = action.payload
    },

    setGate_M_Data : (state,action) => {
      state.Gate_M = action.payload
    },
    setPriceTotal :(state) => {
      state.PriceTotal = state.Type_M.price + state.Fence_M.price + state.Option_M_t1.price + state.option_M_t2.price + state.Gate_M?.price
    }
  },
});

export const { setType_M_Data, setGate_M_Data,setFence_M_Data,setPriceTotal, setOption_M_Data_t1, setOption_M_Data_t2, setSelectedLines } = selectedMaterials.actions;

export default selectedMaterials.reducer;

// Math.ceil((state.Type_M[0].price + state.Fence_M[0].price +( state.Option_M[0][0].price + state.Option_M[1][0].price )) + state.Gate_M[0].price)