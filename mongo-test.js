const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGODB_URI is missing");
  process.exit(1);
}

async function main() {
  try {
    console.log("1. Testing SRV DNS...");

    const srv = await dns.promises.resolveSrv(
      "_mongodb._tcp.cluster0.3a9er21.mongodb.net",
    );

    console.log("SRV DNS works:");
    console.log(srv);

    console.log("\n2. Testing MongoDB connection...");

    const client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      family: 4,
    });

    await client.connect();

    console.log("✅ MongoDB Atlas connected!");

    await client.db("admin").command({ ping: 1 });

    console.log("✅ MongoDB ping successful!");

    await client.close();
  } catch (error) {
    console.error("\n❌ FAILED:");
    console.error(error);
  }
}

main();
