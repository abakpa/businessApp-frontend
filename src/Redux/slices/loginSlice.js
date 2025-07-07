import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    login: [],
    loading: false,
    error:null,
};

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
  
        createLoginRequest:(state)=>{
            state.loading=true
        },
        createLoginSuccess:(state,action)=>{
            state.login.push(action.payload)
            state.loading=false
        },
        createLoginFailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        },
   
    }
})

export const {
    
    createLoginRequest,
    createLoginSuccess,
    createLoginFailure,
 
} = loginSlice.actions

export default loginSlice.reducer