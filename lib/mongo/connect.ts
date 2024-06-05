import { MongoClient } from "mongodb";
export async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI environment variable is not defined");
  }
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const database = client.db("test");
    return database;
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
