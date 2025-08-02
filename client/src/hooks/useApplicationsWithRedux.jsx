import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    setAppliedJobs, 
    setApplicants, 
    addAppliedJob, 
    updateApplicationStatus,
    setLoading,
    setError,
    clearError 
} from '../redux/applicationsSlice';
import { applicationsAPI } from '../services/api';

export default function useApplicationsWithRedux() {
    const dispatch = useDispatch();
    const { appliedJobs, applicants, loading, error } = useSelector(state => state.applications);

    const applyForJob = async (jobId) => {
        dispatch(setLoading(true));
        dispatch(clearError());
        try {
            const response = await applicationsAPI.applyForJob(jobId);
            dispatch(addAppliedJob(response.data));
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to apply for job';
            dispatch(setError(errorMessage));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const fetchAppliedJobs = async () => {
        dispatch(setLoading(true));
        dispatch(clearError());
        try {
            const response = await applicationsAPI.getAppliedJobs();
            dispatch(setAppliedJobs(response.data));
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to fetch applied jobs';
            dispatch(setError(errorMessage));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const fetchApplicants = async (jobId) => {
        dispatch(setLoading(true));
        dispatch(clearError());
        try {
            const response = await applicationsAPI.getApplicants(jobId);
            dispatch(setApplicants(response.data));
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to fetch applicants';
            dispatch(setError(errorMessage));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const updateApplicationStatusAction = async (applicationId, status) => {
        dispatch(setLoading(true));
        dispatch(clearError());
        try {
            const response = await applicationsAPI.updateApplicationStatus(applicationId, status);
            dispatch(updateApplicationStatus({ applicationId, status }));
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to update application status';
            dispatch(setError(errorMessage));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    };

    return {
        appliedJobs,
        applicants,
        loading,
        error,
        applyForJob,
        fetchAppliedJobs,
        fetchApplicants,
        updateApplicationStatus: updateApplicationStatusAction
    };
} 