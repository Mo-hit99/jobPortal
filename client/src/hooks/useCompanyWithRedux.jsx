import { useDispatch, useSelector } from 'react-redux';
import { 
    setCompanies, 
    setCurrentCompany, 
    addCompany, 
    updateCompany,
    setLoading,
    setError,
    clearError 
} from '../redux/companySlice';
import { companyAPI } from '../services/api';

export default function useCompanyWithRedux() {
    const dispatch = useDispatch();
    const { companies, currentCompany, loading, error } = useSelector(state => state.company);

    const createCompany = async (companyData) => {
        dispatch(setLoading(true));
        dispatch(clearError());
        try {
            const response = await companyAPI.createCompany(companyData);
            dispatch(addCompany(response.data));
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to create company';
            dispatch(setError(errorMessage));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const fetchCompanies = async () => {
        dispatch(setLoading(true));
        dispatch(clearError());
        try {
            const response = await companyAPI.getCompanies();
            dispatch(setCompanies(response.data));
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to fetch companies';
            dispatch(setError(errorMessage));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const fetchCompanyById = async (id) => {
        dispatch(setLoading(true));
        dispatch(clearError());
        try {
            const response = await companyAPI.getCompanyById(id);
            dispatch(setCurrentCompany(response.data));
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to fetch company';
            dispatch(setError(errorMessage));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    };

    const updateCompanyAction = async (id, companyData) => {
        dispatch(setLoading(true));
        dispatch(clearError());
        try {
            const response = await companyAPI.updateCompany(id, companyData);
            dispatch(updateCompany({ id, companyData }));
            return response.data;
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to update company';
            dispatch(setError(errorMessage));
            throw err;
        } finally {
            dispatch(setLoading(false));
        }
    };

    return {
        companies,
        currentCompany,
        loading,
        error,
        createCompany,
        fetchCompanies,
        fetchCompanyById,
        updateCompany: updateCompanyAction
    };
} 