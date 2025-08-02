import { useState } from 'react';
import { companyAPI } from '../services/api';

export default function useCompany() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createCompany = async (companyData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await companyAPI.createCompany(companyData);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create company');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getCompanies = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await companyAPI.getCompanies();
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch companies');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const getCompanyById = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await companyAPI.getCompanyById(id);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to fetch company');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateCompany = async (id, companyData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await companyAPI.updateCompany(id, companyData);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update company');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        error,
        createCompany,
        getCompanies,
        getCompanyById,
        updateCompany
    };
} 