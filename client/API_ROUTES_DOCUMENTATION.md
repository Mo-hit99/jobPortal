# API Routes Documentation

This document provides a comprehensive overview of all backend routes and their frontend implementations in the Job Portal application.

## Backend Routes Overview

### User Routes (`/api/v1/users`)
| Method | Endpoint | Description | Frontend Implementation |
|--------|----------|-------------|------------------------|
| POST | `/register` | User registration | `authAPI.register()` |
| POST | `/login` | User login | `authAPI.login()` |
| POST | `/otpVerification` | OTP verification | `authAPI.verifyOTP()` |
| POST | `/profile/update` | Update user profile | `authAPI.updateProfile()` |
| POST | `/forgotpassword` | Forgot password | `authAPI.forgotPassword()` |
| POST | `/resetpassword` | Reset password | `authAPI.resetPassword()` |
| GET | `/logout` | User logout | `authAPI.logout()` |
| GET | `/me` | Get current user | `authAPI.checkAuth()` |

### Job Routes (`/api/v1/jobs`)
| Method | Endpoint | Description | Frontend Implementation |
|--------|----------|-------------|------------------------|
| GET | `/getjobs` | Get all jobs | `jobsAPI.getAllJobs()` |
| GET | `/getSingleJob/:id` | Get job by ID | `jobsAPI.getJobById()` |
| GET | `/getJobByAdmin` | Get admin jobs | `jobsAPI.getAdminJobs()` |
| POST | `/createJobs` | Create new job | `jobsAPI.createJob()` |

### Application Routes (`/api/v1/application`)
| Method | Endpoint | Description | Frontend Implementation |
|--------|----------|-------------|------------------------|
| POST | `/applyjob/:id` | Apply for a job | `applicationsAPI.applyForJob()` |
| GET | `/getapplyjob` | Get applied jobs | `applicationsAPI.getAppliedJobs()` |
| GET | `/:id/applicant` | Get applicants for a job | `applicationsAPI.getApplicants()` |
| POST | `/applicant/status/:id` | Update application status | `applicationsAPI.updateApplicationStatus()` |

### Company Routes (`/api/v1/company`)
| Method | Endpoint | Description | Frontend Implementation |
|--------|----------|-------------|------------------------|
| GET | `/getCompanyData` | Get all companies | `companyAPI.getCompanies()` |
| GET | `/getCompanyData/:id` | Get company by ID | `companyAPI.getCompanyById()` |
| POST | `/companyRegister` | Register new company | `companyAPI.createCompany()` |
| PUT | `/update/companyData/:id` | Update company data | `companyAPI.updateCompany()` |

## Frontend Implementation Details

### API Service (`src/services/api.js`)

The main API service file contains all the API calls organized by feature:

#### Authentication API
```javascript
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
```

#### Jobs API
```javascript
export const jobsAPI = {
  getAllJobs: (params = {}) => api.get('/jobs/getjobs', { params }),
  getJobById: (id) => api.get(`/jobs/getSingleJob/${id}`),
  getAdminJobs: () => api.get('/jobs/getJobByAdmin'),
  createJob: (jobData) => api.post('/jobs/createJobs', jobData),
};
```

#### Applications API
```javascript
export const applicationsAPI = {
  applyForJob: (jobId) => api.post(`/application/applyjob/${jobId}`),
  getAppliedJobs: () => api.get('/application/getapplyjob'),
  getApplicants: (jobId) => api.get(`/application/${jobId}/applicant`),
  updateApplicationStatus: (applicationId, status) =>
    api.post(`/application/applicant/status/${applicationId}`, { status }),
};
```

#### Company API
```javascript
export const companyAPI = {
  createCompany: (companyData) => api.post('/company/companyRegister', companyData),
  getCompanies: () => api.get('/company/getCompanyData'),
  getCompanyById: (id) => api.get(`/company/getCompanyData/${id}`),
  updateCompany: (id, companyData) => api.put(`/company/update/companyData/${id}`, companyData),
};
```

### Custom Hooks

#### Basic Hooks (State Management)
- `useApplications()` - Basic applications operations
- `useCompany()` - Basic company operations

#### Redux-Integrated Hooks
- `useApplicationsWithRedux()` - Applications with Redux state management
- `useCompanyWithRedux()` - Company operations with Redux state management
- `useGetAllJobs()` - Get all jobs with Redux integration
- `useGetSingleJob()` - Get single job with Redux integration

### Redux Store Structure

#### Auth Slice (`authSlice.jsx`)
```javascript
{
  loading: false,
  user: null,
  isAuthenticated: false
}
```

#### Jobs Slice (`jobsSlice.jsx`)
```javascript
{
  AllJobs: [],
  SingleJobs: null
}
```

#### Applications Slice (`applicationsSlice.jsx`)
```javascript
{
  appliedJobs: [],
  applicants: [],
  loading: false,
  error: null
}
```

#### Company Slice (`companySlice.jsx`)
```javascript
{
  companies: [],
  currentCompany: null,
  loading: false,
  error: null
}
```

## Usage Examples

### Using API Calls Directly
```javascript
import { authAPI, jobsAPI, applicationsAPI, companyAPI } from '../services/api';

// Register a new user
const registerUser = async (userData) => {
  try {
    const response = await authAPI.register(userData);
    console.log('User registered:', response.data);
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

// Apply for a job
const applyForJob = async (jobId) => {
  try {
    const response = await applicationsAPI.applyForJob(jobId);
    console.log('Application submitted:', response.data);
  } catch (error) {
    console.error('Application failed:', error);
  }
};
```

### Using Custom Hooks
```javascript
import useApplicationsWithRedux from '../hooks/useApplicationsWithRedux';
import useCompanyWithRedux from '../hooks/useCompanyWithRedux';

function MyComponent() {
  const { 
    appliedJobs, 
    loading, 
    error, 
    applyForJob, 
    fetchAppliedJobs 
  } = useApplicationsWithRedux();

  const { 
    companies, 
    createCompany, 
    fetchCompanies 
  } = useCompanyWithRedux();

  useEffect(() => {
    fetchAppliedJobs();
    fetchCompanies();
  }, []);

  const handleApply = async (jobId) => {
    try {
      await applyForJob(jobId);
      alert('Application submitted successfully!');
    } catch (error) {
      alert('Failed to apply for job');
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {/* Your component JSX */}
    </div>
  );
}
```

## Error Handling

All API calls include comprehensive error handling:

1. **Network Errors**: Handled by axios interceptors
2. **Authentication Errors**: Automatically redirect to login page
3. **Validation Errors**: Displayed to users with meaningful messages
4. **Server Errors**: Logged and handled gracefully

## Authentication

The API service automatically handles authentication:
- Cookies are sent with requests (`withCredentials: true`)
- Unauthorized requests redirect to login page
- Token management is handled automatically

## Environment Configuration

The API base URL is configured via environment variables:
```javascript
const URL_LINK = import.meta.env.VITE_BACKEND_LINK || 'http://localhost:4000/api/v1';
```

Make sure to set `VITE_BACKEND_LINK` in your environment variables for production deployment. 