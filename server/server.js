import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import MongodbConnection from './MongoDb_Connection/MongodbConnection.js';
import User_Routes from './routes/User_Routes.js';
import Company_Routes from './routes/Company_Routes.js';
import Job_Routes from './routes/Job_Routes.js';
import Application_Routes from './routes/Application_Routes.js';
import cors from 'cors';
import helmet from 'helmet';
dotenv.config();

const allowedOrigins = [
    'https://job-portal-five-kappa.vercel.app',
    'https://job-portal-b15h.vercel.app',
    'http://localhost:5173'
];

const corsOption = {
    origin: function (origin, callback) {
        // allow requests with no origin (like mobile apps, curl, postman)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true // Allow cookies and credentials to be sent in cross-origin requests
}

const PORT = process.env.PORT  || 4000;
const app = express();

// Trust proxy for Vercel deployment - must be first!
app.set('trust proxy', 1);

app.use(helmet());

// Initialize MongoDB connection with retries
const initializeMongoDB = async (retries = 5) => {
    for (let i = 0; i < retries; i++) {
        try {
            await MongodbConnection();
            console.log('MongoDB connection established successfully');
            return;
        } catch (error) {
            console.error(`MongoDB connection attempt ${i + 1} failed:`, error.message);

            if (i === retries - 1) {
                console.error('All MongoDB connection attempts failed. Server will continue but database operations may fail.');
                return;
            }

            const delay = Math.min(1000 * Math.pow(2, i), 30000); // Exponential backoff, max 30s
            console.log(`Retrying MongoDB connection in ${delay / 1000} seconds...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

// Initialize MongoDB connection
initializeMongoDB();
app.use(cors(corsOption));

// Add headers for Vercel (complementary to CORS)
app.use((req, res, next) => {
    // Only add headers if CORS didn't already handle them
    if (!res.headersSent) {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    }

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware to check database connection
app.use((req, res, next) => {
    if (mongoose.connection.readyState !== 1) {
        console.warn('Database connection not ready, attempting to reconnect...');
        // Don't block the request, but log the warning
    }
    next();
});


app.use('/api/v1/users',User_Routes)
app.use('/api/v1/company',Company_Routes)
app.use('/api/v1/jobs',Job_Routes);
app.use('/api/v1/application',Application_Routes)

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Job Portal Backend API is running!',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        success: true,
        status: 'healthy',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        timestamp: new Date().toISOString()
    });
});

// For Vercel deployment, we export the app instead of listening
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log(`Health check available at http://localhost:${PORT}/health`);
    }).on('error', (error) => {
        console.error('Server failed to start:', error.message);
        if (error.code === 'EADDRINUSE') {
            console.error(`Port ${PORT} is already in use. Please try a different port.`);
        }
    });
}

// Export the Express app for Vercel
export default app;