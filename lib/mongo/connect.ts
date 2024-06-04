import { MongoClient } from "mongodb";
export async function connectDB() {
  const uri =
    "mongodb+srv://pkunofficial66:vQKK0tp2BwGvTbyt@cluster0.ipl2iic.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const database = client.db("test");
    const YearlyBalance = await database.collection("YearlyBalanceModels");
    return YearlyBalance;
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}


