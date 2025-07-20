import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function MongodbConnection() {
    try {
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 15000, // Timeout after 15 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4 // Use IPv4, skip trying IPv6
        };

        await mongoose.connect(process.env.MONGO_URL, options);
        console.log("MongoDB Connected");

        mongoose.connection.on('error', err => {
            console.log('MongoDB connection error: ' + err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        mongoose.connection.on('reconnected', () => {
            console.log('MongoDB reconnected');
        });

    } catch (error) {
        console.log("MongoDB Connection Error: ", error);
        process.exit(1); // Exit with failure
    }
}