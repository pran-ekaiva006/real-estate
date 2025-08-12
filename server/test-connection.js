// test-connection.js (ES module version)

import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://newUser:21976854@cluster0.ti7b0lf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ You successfully connected to MongoDB!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);