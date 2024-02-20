import { createSlice } from "@reduxjs/toolkit";

const cartstate = {
    items : []
}


const cartslice = createSlice({
   name : "slicing_cart",
   initialState : cartstate,
   reducers : {
     addtocart: (state,action)=>{
        state.items.push(action.payload)
     },
     removefromcart : (state,action)=>{
        const newarray = state.items.filter((product)=>product.id !== action.payload.id)
         state.items = newarray
     }
   }
})

export default cartslice