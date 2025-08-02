import { createSlice } from '@reduxjs/toolkit';

const companySlice = createSlice({
    name: 'company',
    initialState: {
        companies: [],
        currentCompany: null,
        loading: false,
        error: null,
    },
    reducers: {
        setCompanies: (state, action) => {
            state.companies = action.payload;
        },
        setCurrentCompany: (state, action) => {
            state.currentCompany = action.payload;
        },
        addCompany: (state, action) => {
            state.companies.push(action.payload);
        },
        updateCompany: (state, action) => {
            const { id, companyData } = action.payload;
            const index = state.companies.findIndex(company => company._id === id);
            if (index !== -1) {
                state.companies[index] = { ...state.companies[index], ...companyData };
            }
            if (state.currentCompany && state.currentCompany._id === id) {
                state.currentCompany = { ...state.currentCompany, ...companyData };
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
    setCompanies,
    setCurrentCompany,
    addCompany,
    updateCompany,
    setLoading,
    setError,
    clearError,
} = companySlice.actions;

export default companySlice.reducer; 