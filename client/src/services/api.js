import axios from 'axios';
// Create axios instance with base configuration
const URL_LINK = import.meta.env.VITE_BACKEND_LINK ||'http://localhost:4000/api/v1';
const api = axios.create({
  baseURL: `${URL_LINK}`,
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

// Helper function to get consistent error messages
const getErrorMessage = (error, defaultMessage) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return defaultMessage;
};

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
  updateCompany: (id, companyData) => api.put(`/company/update/companyData/${id}`, companyData),
};

// Error message constants for consistent messaging
export const ERROR_MESSAGES = {
  // Jobs related errors
  FETCH_JOBS: "Failed to fetch jobs. Please try again.",
  FETCH_SINGLE_JOB: "Failed to fetch job details. Please try again.",
  CREATE_JOB: "Failed to create job. Please try again.",
  FETCH_ADMIN_JOBS: "Failed to fetch admin jobs. Please try again.",
  
  // Applications related errors
  APPLY_JOB: "Failed to apply for job. Please try again.",
  FETCH_APPLICATIONS: "Failed to fetch applications. Please try again.",
  FETCH_APPLICANTS: "Failed to fetch applicants. Please try again.",
  UPDATE_APPLICATION_STATUS: "Failed to update application status. Please try again.",
  
  // Company related errors
  CREATE_COMPANY: "Failed to create company. Please try again.",
  FETCH_COMPANIES: "Failed to fetch companies. Please try again.",
  FETCH_COMPANY: "Failed to fetch company details. Please try again.",
  UPDATE_COMPANY: "Failed to update company. Please try again.",
  
  // Auth related errors
  REGISTER: "Registration failed. Please try again.",
  LOGIN: "Login failed. Please check your credentials.",
  LOGOUT: "Logout failed. Please try again.",
  CHECK_AUTH: "Failed to verify authentication. Please try again.",
  VERIFY_OTP: "OTP verification failed. Please try again.",
  FORGOT_PASSWORD: "Failed to send reset email. Please try again.",
  RESET_PASSWORD: "Failed to reset password. Please try again.",
  UPDATE_PROFILE: "Failed to update profile. Please try again.",
  
  // Generic errors
  NETWORK_ERROR: "Network error. Please check your connection and try again.",
  SERVER_ERROR: "Server error. Please try again later.",
  UNKNOWN_ERROR: "An unexpected error occurred. Please try again.",
};

export { getErrorMessage };
export default api; 