import {createSlice} from '@reduxjs/toolkit'


const productState = {
    items:[]
}

const productslice = createSlice({
    name:"slicing_product",
    initialState : productState,
    reducers: {
        viewproduct : (state,action)=>{
            state.items  = action.payload
        },
        


    }
})

export default productslice