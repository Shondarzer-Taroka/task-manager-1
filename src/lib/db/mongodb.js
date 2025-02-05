

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return; 
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "task-manager", 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}
