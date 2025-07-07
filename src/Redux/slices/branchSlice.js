import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    branch: [],
    loading: false,
    error:null,
};

const branchSlice = createSlice({
    name:'branch',
    initialState,
    reducers:{
  
        createBranchRequest:(state)=>{
            state.loading=true
        },
        createBranchSuccess:(state,action)=>{
            state.branch.push(action.payload)
            state.loading=false
        },
        createBranchFailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        },
        fetchBranchRequest:(state)=>{
            state.loading=true
        },
        fetchBranchSuccess:(state,action)=>{
            state.branch= action.payload;
            state.loading=false
        },
        fetchBranchFailure:(state,action)=>{
            state.error=action.payload
            state.loading=false
        },
   
    }
})

export const {
    
    createBranchRequest,
    createBranchSuccess,
    createBranchFailure,
   fetchBranchRequest,
   fetchBranchSuccess,
   fetchBranchFailure,
 
} = branchSlice.actions

export default branchSlice.reducer