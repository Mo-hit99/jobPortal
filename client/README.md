# JobPortal Frontend

A modern React-based job portal frontend that integrates with the Node.js/Express backend API.

## Features

### 🔐 Authentication
- User registration with email verification (OTP)
- Login/logout functionality
- Password reset via email
- Role-based access (Student/Recruiter)
- JWT token-based authentication with HTTP-only cookies

### 💼 Job Management
- Browse and search jobs
- Advanced filtering (salary, experience, job type)
- Job creation for recruiters
- Job application for students
- Application tracking

### 👤 User Profiles
- Profile management
- Resume upload
- Skills management
- Company association for recruiters

## Tech Stack

- **Frontend Framework**: React 19 with Vite
- **State Management**: Redux Toolkit with Redux Persist
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: React Router v7
- **Rich Text Editor**: Jodit React
- **Icons**: Custom SVG icons

## Project Structure

```
client/
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── ApplyJobButton.jsx
│   │   ├── JobApplicationTracker.jsx
│   │   ├── JobCreationForm.jsx
│   │   ├── JobsCard.jsx
│   │   ├── LoginPage.jsx
│   │   ├── SignUp.jsx
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   │   ├── useGetAllJobs.jsx
│   │   └── useGetSingleJob.jsx
│   ├── pages/              # Page components
│   ├── redux/              # Redux store and slices
│   │   ├── authSlice.jsx
│   │   ├── jobsSlice.jsx
│   │   └── store.jsx
│   ├── services/           # API service layer
│   │   └── api.js
│   └── assets/             # Static assets
```

## API Integration

### Service Layer (`src/services/api.js`)

The application uses a centralized API service layer that provides:

- **Base Configuration**: Axios instance with CORS and credentials
- **Request/Response Interceptors**: Automatic error handling and authentication
- **Organized API Calls**: Grouped by functionality (auth, jobs, applications, companies)

### API Endpoints

#### Authentication
- `POST /api/v1/users/register` - User registration
- `POST /api/v1/users/login` - User login
- `POST /api/v1/users/otpVerification` - Email verification
- `POST /api/v1/users/forgotpassword` - Password reset request
- `POST /api/v1/users/resetpassword` - Set new password
- `GET /api/v1/users/logout` - User logout

#### Jobs
- `GET /api/v1/jobs/getjobs` - Get all jobs (with search)
- `GET /api/v1/jobs/getSingleJob/:id` - Get specific job
- `GET /api/v1/jobs/getJobByAdmin` - Get recruiter's jobs
- `POST /api/v1/jobs/createJobs` - Create new job

#### Applications
- `POST /api/v1/application/applyjob/:id` - Apply for job
- `POST /api/v1/application/getapplyjob` - Get user's applications
- `POST /api/v1/application/:id/applicant` - Get job applicants
- `POST /api/v1/application/applicant/status/:id` - Update application status

## State Management

### Redux Store Structure

```javascript
{
  auth: {
    loading: boolean,
    user: User | null
  },
  jobs: {
    AllJobs: Job[],
    SingleJobs: Job | null
  }
}
```

### Key Actions

- `setUser(user)` - Set authenticated user
- `setAllJobs(jobs)` - Set all jobs list
- `setSingleJobs(job)` - Set single job details

## Key Components

### Authentication Components

#### `SignUp.jsx`
- User registration with validation
- OTP verification modal
- Form validation with error handling
- Role selection (Student/Recruiter)

#### `LoginPage.jsx`
- User login with validation
- Automatic redirect if already authenticated
- Error handling and loading states

#### `ForgotPassword.jsx`
- Password reset request
- Email validation
- Success/error feedback

### Job Management Components

#### `JobsCard.jsx`
- Display all jobs with filtering
- Search functionality
- Advanced filters (salary, experience, job type)
- Real-time job data from API

#### `JobCreationForm.jsx`
- Rich text editor for job descriptions
- Form validation
- File upload support
- Company association

#### `ViewJobs.jsx`
- Recruiter's job management
- Job status tracking
- Edit/delete functionality (placeholder)

### Application Components

#### `JobApplicationTracker.jsx`
- Student's application tracking
- Application status display
- Job details integration

#### `ApplyJobButton.jsx`
- Job application functionality
- Role-based access control
- Success/error feedback

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Backend server running on `http://localhost:4000`

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd JobPortal/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Environment Variables

Create a `.env` file in the client directory:

```env
VITE_API_BASE_URL=http://localhost:4000/api/v1
```

## Usage

### For Students
1. Register/Login as a Student
2. Browse available jobs
3. Apply for jobs of interest
4. Track application status

### For Recruiters
1. Register/Login as a Recruiter
2. Create job postings
3. View applications
4. Manage job status

## Error Handling

The application implements comprehensive error handling:

- **API Errors**: Centralized error handling in API service
- **Form Validation**: Client-side validation with user feedback
- **Network Errors**: Automatic retry and user notification
- **Authentication Errors**: Automatic redirect to login

## Security Features

- **JWT Tokens**: Secure authentication with HTTP-only cookies
- **CORS Configuration**: Proper cross-origin request handling
- **Input Validation**: Client and server-side validation
- **Role-based Access**: Component-level access control

## Performance Optimizations

- **Lazy Loading**: Route-based code splitting
- **Redux Persist**: State persistence across sessions
- **Optimized Re-renders**: Proper React hooks usage
- **Image Optimization**: Efficient asset loading

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository.
