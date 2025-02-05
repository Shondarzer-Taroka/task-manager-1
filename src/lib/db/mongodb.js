

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return; // ✅ Prevent multiple connections
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "task-manager", // ✅ Add your database name
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
  }
}
