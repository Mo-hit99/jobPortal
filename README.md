# Job Portal

A full-stack job portal application built with React.js and Node.js that connects job seekers with employers, facilitating the job search and recruitment process.

## Features

- **User Authentication & Authorization**
  - Secure signup and login system
  - Role-based access control (Job Seekers & Recruiters)
  - Password recovery functionality

- **For Job Seekers**
  - Create and manage user profiles
  - Browse and search job listings
  - Apply for jobs
  - Track job applications
  - Bookmark favorite jobs
  - View company profiles

- **For Recruiters**
  - Create company profiles
  - Post and manage job listings
  - Review job applications
  - Manage applicants
  - Dashboard with recruitment analytics

- **Additional Features**
  - Dark mode support
  - Responsive design
  - Job categories browsing
  - Brand showcase
  - FAQ section
  - Help and support
  - Privacy policy and refund policy

## Tech Stack

### Frontend
- React.js
- Vite
- Redux for state management
- Tailwind CSS
- PostCSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── Components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── redux/        # Redux state management
│   │   └── services/     # API services
│
└── server/                # Backend Node.js application
    ├── Controller/       # Route controllers
    ├── Model/           # MongoDB models
    ├── routes/          # API routes
    └── middlewares/     # Custom middlewares
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Mo-hit99/jobPortal.git
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Install frontend dependencies
```bash
cd client
npm install
```

### Running the Application

1. Start the backend server
```bash
cd server
npm start
```

2. Start the frontend application
```bash
cd client
npm run dev
```

## Environment Variables

Create `.env` files in both client and server directories with the following variables:

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
