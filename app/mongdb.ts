// lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB as string;
console.log("MONGODB_URI from env:", uri);

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

if (!dbName) {
  throw new Error("Please add your MONGODB_DB to .env.local");
}

/**
 * In dev, Next.js hot reload can cause multiple clients to be created.
 * We store it in a global variable to reuse the same instance.
 */
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri);
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
