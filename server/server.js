import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import MongodbConnection from './MongoDb_Connection/MongodbConnection.js';
import User_Routes from './routes/User_Routes.js';
import Company_Routes from './routes/Company_Routes.js';
import Job_Routes from './routes/Job_Routes.js';
import Application_Routes from './routes/Application_Routes.js';
import cors from 'cors';
import helmet from 'helmet';
dotenv.config();
const allowedOrigins = [
    process.env.CLIENT_LINK || 'http://localhost:5173',
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


const PORT = process.env.PORT  || 3000;
const app = express();

// Trust proxy for Vercel deployment - must be first!


app.use(helmet());

// Initialize MongoDB connection with retries
const initializeMongoDB = async () => {
    try {
        await MongodbConnection();
    } catch (error) {
        console.error('Failed to connect to MongoDB. Retrying in 5 seconds...');
    }
};
// add intance function
initializeMongoDB();
app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


app.use('/api/v1/users',User_Routes)
app.use('/api/v1/company',Company_Routes)
app.use('/api/v1/jobs',Job_Routes);
app.use('/api/v1/application',Application_Routes)

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});