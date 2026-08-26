import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export default async function connectDB() {
  const start = Date.now();

  if (cached.conn) {
    console.log(`MongoDB: reused connection in ${Date.now() - start}ms`);
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("MongoDB: creating new connection...");

    cached.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 5000,
      socketTimeoutMS: 5000,
      maxPoolSize: 10,
    });
  }

  try {
    cached.conn = await cached.promise;

    console.log(`MongoDB: connected in ${Date.now() - start}ms`);

    return cached.conn;
  } catch (error) {
    cached.promise = null;

    console.error(`MongoDB: connection failed after ${Date.now() - start}ms`);

    throw error;
  }
}
