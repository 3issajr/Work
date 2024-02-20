import { createSlice } from "@reduxjs/toolkit"


const userState = {
    users : []
}

const userSlice = createSlice({
    name:"slicing_user",
    initialState : userState,
    reducers : {
        postuserdata : (state,action)=>{
            state.users = action.payload

        }
    }
})

export default userSlice