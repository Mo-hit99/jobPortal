import { createSlice } from '@reduxjs/toolkit';

const applicationsSlice = createSlice({
    name: 'applications',
    initialState: {
        appliedJobs: [],
        applicants: [],
        loading: false,
        error: null,
    },
    reducers: {
        setAppliedJobs: (state, action) => {
            state.appliedJobs = action.payload;
        },
        setApplicants: (state, action) => {
            state.applicants = action.payload;
        },
        addAppliedJob: (state, action) => {
            state.appliedJobs.push(action.payload);
        },
        updateApplicationStatus: (state, action) => {
            const { applicationId, status } = action.payload;
            const application = state.appliedJobs.find(app => app._id === applicationId);
            if (application) {
                application.status = status;
            }
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const {
    setAppliedJobs,
    setApplicants,
    addAppliedJob,
    updateApplicationStatus,
    setLoading,
    setError,
    clearError,
} = applicationsSlice.actions;

export default applicationsSlice.reducer; 