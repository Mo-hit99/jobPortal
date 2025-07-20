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
import { rateLimit } from 'express-rate-limit'
dotenv.config();
const URL_LINK = process.env.CLIENT_LINK || 'http://localhost:5173';
console.log(URL_LINK)
const corsOption = {
    origin:`${URL_LINK}`,
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies and credentials to be sent in cross-origin requests
}


const app = express();
app.use(helmet());
const PORT = process.env.PORT  || 3000;
MongodbConnection();
app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
})
// Apply the rate limiting middleware to all requests.
app.use(limiter)
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