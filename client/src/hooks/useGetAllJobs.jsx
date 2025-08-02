import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllJobs } from '../redux/jobsSlice'
import { jobsAPI, getErrorMessage, ERROR_MESSAGES } from '../services/api'

export default function useGetAllJobs() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        const fetchAlljobs = async () => {
            try {
                const response = await jobsAPI.getAllJobs()
                if (response.data) {
                    dispatch(setAllJobs(response.data))
                }
            } catch (error) {
                console.error("Error fetching jobs:", error)
                const errorMessage = getErrorMessage(error, ERROR_MESSAGES.FETCH_JOBS)
                // You could dispatch an error action here if you have error handling in your Redux store
                // For now, we'll just log the error with a consistent message
                console.error(errorMessage)
            }
        }
        fetchAlljobs()
    }, [dispatch])
}
