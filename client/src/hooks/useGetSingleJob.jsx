import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSingleJobs } from '../redux/jobsSlice';
import { jobsAPI, getErrorMessage, ERROR_MESSAGES } from '../services/api'

export default function useGetSingleJob({id}) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const response = await jobsAPI.getJobById(id)
                if (response.data) {
                    dispatch(setSingleJobs(response.data))
                }
            } catch (error) {
                console.error("Error fetching single job:", error)
                const errorMessage = getErrorMessage(error, ERROR_MESSAGES.FETCH_SINGLE_JOB)
                // You could dispatch an error action here if you have error handling in your Redux store
                // For now, we'll just log the error with a consistent message
                console.error(errorMessage)
            }
        }
        
        if (id) {
            fetchSingleJob()
        }
    }, [id, dispatch])
}
