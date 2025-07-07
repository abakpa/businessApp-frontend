import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: [],
    branchUsers: [],
    loading: false,
    error:null,
};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
  
        createUserRequest:(state)=>{
            state.loading=true
        },
        createUserSuccess:(state,action)=>{
            state.user.push(action.payload)
            state.loading=false
        },
        createUserFailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        },
   
    }
})

export const {
    
    createUserRequest,
    createUserSuccess,
    createUserFailure,
 
} = userSlice.actions

export default userSlice.reducer