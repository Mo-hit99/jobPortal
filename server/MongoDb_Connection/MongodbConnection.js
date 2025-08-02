import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function MongodbConnection() {
    try {
        // Configure mongoose connection options
        const options = {
            // Connection timeout (30 seconds)
            serverSelectionTimeoutMS: 30000,
            // Socket timeout (45 seconds)
            socketTimeoutMS: 45000,
            // Connection timeout (30 seconds)
            connectTimeoutMS: 30000,
            // Max pool size
            maxPoolSize: 10,
            // Min pool size
            minPoolSize: 5,
            // Max idle time
            maxIdleTimeMS: 30000,
        };

        const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/jobportal';
        await mongoose.connect(mongoUrl, options);
        console.log("MongoDB Connected Successfully");

        // Handle connection events
        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB reconnected');
        });

    } catch (error) {
        console.error("MongoDB Connection Error: ", error);
        // Don't exit the process, let the retry logic in server.js handle it
        throw error;
    }
}