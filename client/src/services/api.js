import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
api.interceptors.request.use(
  (config) => {
    // You can add any request modifications here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  register: (userData) => api.post('/users/register', userData),
  login: (credentials) => api.post('/users/login', credentials),
  logout: () => api.get('/users/logout'),
  checkAuth: () => api.get('/users/me'),
  verifyOTP: (otp) => api.post('/users/otpVerification', { code: otp }),
  forgotPassword: (email) => api.post('/users/forgotpassword', { email }),
  resetPassword: (data) => api.post('/users/resetpassword', data),
  updateProfile: (profileData) => api.post('/users/profile/update', profileData),
};

// Jobs API calls
export const jobsAPI = {
  getAllJobs: (params = {}) => api.get('/jobs/getjobs', { params }),
  getJobById: (id) => api.get(`/jobs/getSingleJob/${id}`),
  getAdminJobs: () => api.get('/jobs/getJobByAdmin'),
  createJob: (jobData) => api.post('/jobs/createJobs', jobData),
};

// Applications API calls
export const applicationsAPI = {
  applyForJob: (jobId) => api.post(`/application/applyjob/${jobId}`),
  getAppliedJobs: () => api.get('/application/getapplyjob'),
  getApplicants: (jobId) => api.get(`/application/${jobId}/applicant`),
  updateApplicationStatus: (applicationId, status) =>
    api.post(`/application/applicant/status/${applicationId}`, { status }),
};

// Company API calls
export const companyAPI = {
  createCompany: (companyData) => api.post('/company/companyRegister', companyData),
  getCompanies: () => api.get('/company/getCompanyData'),
  getCompanyById: (id) => api.get(`/company/getCompanyData/${id}`),
};

export default api; 