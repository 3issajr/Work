import { configureStore } from "@reduxjs/toolkit";
import productslice from "./productslice";
import cartslice from "./cartslice"
import userslice from './userslice'

const store = configureStore({
    reducer:{
        singlep : productslice.reducer,
        cart : cartslice.reducer,
        user : userslice.reducer,
    }
    
})


export default store