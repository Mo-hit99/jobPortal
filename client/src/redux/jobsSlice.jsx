import {createSlice } from '@reduxjs/toolkit'

const AllJobsSlice = createSlice({
    name:'jobs',
    initialState : {
        AllJobs : [],
        SingleJobs:null,
    },
    reducers:{
        setAllJobs : (state,action)=>{
            state.AllJobs = action.payload;
        },
        setSingleJobs : (state,action)=>{
            state.SingleJobs = action.payload;
        }
    }
})

export const {setAllJobs,setSingleJobs}  = AllJobsSlice.actions;

export default AllJobsSlice.reducer