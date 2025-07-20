import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function MongodbConnection() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB Connection Error: ", error);
    }
    }