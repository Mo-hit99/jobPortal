import { useState, useEffect } from 'react';
import { applicationsAPI } from '../services/api';

export default function useApplications() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const applyForJob = async (jobId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await applicationsAPI.applyForJob(jobId);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to apply for job');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getAppliedJobs = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await applicationsAPI.getAppliedJobs();
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch applied jobs');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getApplicants = async (jobId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await applicationsAPI.getApplicants(jobId);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch applicants');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateApplicationStatus = async (applicationId, status) => {
        setLoading(true);
        setError(null);
        try {
            const response = await applicationsAPI.updateApplicationStatus(applicationId, status);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update application status');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        applyForJob,
        getAppliedJobs,
        getApplicants,
        updateApplicationStatus
    };
} 