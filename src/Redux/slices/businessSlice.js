import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    business: [],
    loading: false,
    error:null,
};

const businessSlice = createSlice({
    name:'business',
    initialState,
    reducers:{
  
        createBusinessRequest:(state)=>{
            state.loading=true
        },
        createBusinessSuccess:(state,action)=>{
            state.business.push(action.payload)
            state.loading=false
        },
        createBusinessFailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        },
   
    }
})

export const {
    
    createBusinessRequest,
    createBusinessSuccess,
    createBusinessFailure,
 
} = businessSlice.actions

export default businessSlice.reducer