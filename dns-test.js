const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGODB_URI is missing");
  process.exit(1);
}

async function main() {
  const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 15000,
    connectTimeoutMS: 15000,
    family: 4,
  });

  try {
    console.log("Connecting to MongoDB Atlas...");

    await client.connect();

    console.log("✅ MongoDB connected!");

    const result = await client.db("admin").command({ ping: 1 });

    console.log("✅ Ping successful:", result);

    await client.close();

    console.log("Connection closed.");
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error);
  }
}

main();
